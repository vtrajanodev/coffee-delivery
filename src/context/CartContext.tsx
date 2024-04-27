import { ReactNode, createContext, useState } from "react";
import { Cart } from "../@types/cart.type";
import { Coffee } from "../@types/coffee.type";


interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextProps {
  cart: Cart
  isCoffeeOnCart: (coffee: Coffee) => boolean
  handleAddCoffeeToCart: (coffee: Coffee) => void
  handleRemoveCoffeeFromCart: (coffee: Coffee) => void
}

export const CartContext = createContext({} as CartContextProps)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {

  const [cart, setCart] = useState<Cart>({
    items: [],
    delivery: 0,
    totalCartValue: 0,
    totalItemsValue: 0
  })



  const isCoffeeOnCart = (coffee: Coffee) => {
    return !!cart.items.find((item) => item.id === coffee.id)
  }

  const handleAddCoffeeToCart = (coffee: Coffee) => {
    setCart(state => ({
      ...state,
      items: isCoffeeOnCart(coffee) ? [...state.items] : [...state.items, coffee]
    }))
  }

  const handleRemoveCoffeeFromCart = (coffee: Coffee) => {
    setCart(state => ({
      ...state,
      items: [...state.items.filter((item) => item.id !== coffee.id)]
    }))
  }

  return (
    <CartContext.Provider value={{
      cart,
      handleAddCoffeeToCart,
      handleRemoveCoffeeFromCart,
      isCoffeeOnCart,

    }}>
      {children}
    </CartContext.Provider>
  )
}