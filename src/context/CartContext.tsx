import { createContext } from "react";
import { ReactNode } from "react";

export interface CartContextProviderProps {
  children: ReactNode
}


export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  

  const CartContext = createContext({} as any)

  return (
    <CartContext.Provider value={''}>
      {children}
    </CartContext.Provider>
  )
}
