
import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

interface AuthContextProps {
  user: User | undefined;
  signInWithGoogleAccount: () => void;
  signInWithFacebookAccount: () => void;
  SignOut: () => Promise<void>;
}

interface AuthContextProviderProps {
  children: ReactNode
}

interface User {
  id?: string;
  name?: string | null;
  photoUrl?: string | null;
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

  const [user, setUser] = useState<User | undefined>()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, photoURL, uid } = user

        setUser({
          id: uid,
          name: displayName,
          photoUrl: photoURL
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const signInWithGoogleAccount = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
    GoogleAuthProvider.credentialFromResult(result)

    const { displayName, photoURL, uid } = result.user

    if (result.user) {
      setUser({
        id: uid,
        name: displayName,
        photoUrl: photoURL
      })
    }
  }

  const signInWithFacebookAccount = async () => {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider)
    FacebookAuthProvider.credentialFromResult(result)

    const { displayName, photoURL, uid } = result.user

    if (result.user) {
      setUser({
        id: uid,
        name: displayName,
        photoUrl: photoURL
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
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}