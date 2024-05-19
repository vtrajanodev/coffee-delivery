
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { User } from "../@types/user.type";
import { auth, db } from "../services/firebase";
import { addDoc, collection } from "firebase/firestore";

interface AuthContextProps {
  user: User | undefined;
  signInWithGoogleAccount: () => void;
  signInWithFacebookAccount: () => void;
  SignOut: () => Promise<void>;
  handleRegisterUser: (email: string, password: string, name: string) => Promise<void>;
  signInWithAccountInfo: (email: string, password: string) => void;
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

  const [user, setUser] = useState<User | undefined>()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, photoURL, uid, email } = user

        setUser({
          uid: uid,
          name: displayName,
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

      setUser({
        uid,
        name,
        email,
        photoURL
      })

      try {
        
        const docRef = await addDoc(collection(db, "users"), {
          uid,
          name,
          email,
          photoURL
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  const signInWithAccountInfo = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)

    if (userCredential.user) {

      const { displayName, photoURL, uid, email } = userCredential.user

      setUser({
        uid,
        name: displayName,
        email,
        photoURL
      })
    }
  }

  const signInWithGoogleAccount = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
    GoogleAuthProvider.credentialFromResult(result)

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
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}