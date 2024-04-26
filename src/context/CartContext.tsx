import { ReactNode, createContext, useEffect, useState } from "react";
import { Cart } from "../@types/cart.type";
import { Coffee } from "../@types/coffee.type";


interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextProps {
  cart: Cart
  handleAddCoffeeToCart: (coffee: Coffee) => void
  isCoffeeOnCart: (coffee: Coffee) => boolean
}

export const CartContext = createContext({} as CartContextProps)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {

  const [cart, setCart] = useState<Cart>({
    items: [],
    delivery: 0,
    totalCartValue: 0,
    totalItemsValue: 0
  })

  useEffect(() => {
    console.log(cart)
  }, [cart])

  const isCoffeeOnCart = (coffee: Coffee) => {
    return !!cart.items.find((item) => item.id === coffee.id)
  }

  const handleAddCoffeeToCart = (coffee: Coffee) => {


    setCart(state => ({
      ...state,
      items: isCoffeeOnCart(coffee) ? [...state.items] : [...state.items, coffee]
    }))
  }

  return (
    <CartContext.Provider value={{
      cart,
      handleAddCoffeeToCart,
      isCoffeeOnCart
    }}>
      {children}
    </CartContext.Provider>
  )
}