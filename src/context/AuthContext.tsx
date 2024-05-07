
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ReactNode, createContext } from "react";
import { auth } from "../services/firebase";

interface AuthContextProps {
  signInWithGoogleAccount: () => void
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

  const signInWithGoogleAccount = async () => {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(result)
    console.log('credential: ', credential)
    const token = credential?.idToken

    console.log(token)
  }


  return (
    <AuthContext.Provider value={{
      signInWithGoogleAccount
    }}>
      {children}
    </AuthContext.Provider>
  )
}