
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ReactNode, createContext, useEffect, useState } from "react";
import { User } from "../@types/user.type";
import { auth, db } from "../services/firebase";

interface AuthContextProps {
  user: User | undefined;
  authenticationErrorMessage: string;
  signInWithGoogleAccount: () => void;
  signInWithFacebookAccount: () => void;
  SignOut: () => Promise<void>;
  handleRegisterUser: (email: string, password: string, name: string) => Promise<void>;
  signInWithAccountInfo: (email: string, password: string) => Promise<void>;
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

  const [user, setUser] = useState<User | undefined>()
  const [authenticationErrorMessage, setAuthenticationErrorMessage] = useState<string>('')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {

      const isPasswordProvider = user?.providerData.some((item) => item.providerId === 'password')

      if (user) {
        const { displayName, photoURL, uid, email } = user

        const docRef = doc(db, "users", uid)
        const docSnap = await getDoc(docRef);

        setUser({
          uid: uid,
          name: isPasswordProvider ? docSnap.data()?.name : displayName,
          photoURL: photoURL,
          email: email
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const handleRegisterUser = async (email: string, password: string, name: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)

    if (userCredential.user) {

      const { photoURL, uid, email } = userCredential.user

      const userInfo = {
        uid,
        name,
        email,
        photoURL,
        password
      }

      setUser(userInfo)

      try {
        const usersRef = doc(db, "users", uid)
        await setDoc(usersRef, userInfo);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  const signInWithAccountInfo = async (emailInput: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailInput, password)

      const isPasswordProvider = userCredential.user.providerData.some((item) => item.providerId === 'password')

      if (userCredential.user && isPasswordProvider) {

        const { photoURL, uid, email } = userCredential.user

        const docRef = doc(db, "users", uid)
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data())

        if (docSnap.exists()) {
          setUser({
            uid,
            name: docSnap.data().name,
            email,
            photoURL
          })
        }
      }
    }
    catch (e: any) {
      if (e.code.includes('invalid-credential')) {
        setAuthenticationErrorMessage('Campo login e/ou senha inválido')
      }
    }
  }

  const signInWithGoogleAccount = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
    GoogleAuthProvider.credentialFromResult(result)

    console.log(result.user)


    const { displayName, photoURL, uid, email } = result.user

    if (result.user) {
      setUser({
        uid,
        name: displayName,
        email,
        photoURL
      })
    }
  }

  const signInWithFacebookAccount = async () => {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider)
    FacebookAuthProvider.credentialFromResult(result)

    const { displayName, photoURL, uid, email } = result.user

    if (result.user) {
      setUser({
        uid,
        name: displayName,
        email,
        photoURL
      })
    }
  }

  const SignOut = async () => {
    setUser(undefined)
    localStorage.removeItem('cart')
    localStorage.removeItem('coffeeList')
    return await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{
      signInWithGoogleAccount,
      signInWithFacebookAccount,
      SignOut,
      handleRegisterUser,
      signInWithAccountInfo,
      user,
      authenticationErrorMessage
    }}>
      {children}
    </AuthContext.Provider>
  )
}