import { ReactNode, createContext, useEffect, useState } from "react";
import { Cart } from "../@types/cart.type";
import { Coffee } from "../@types/coffee.type";


interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextProps {
  cart: Cart
  handleAddCoffeeToCart: (coffee: Coffee) => void
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

  const handleAddCoffeeToCart = (coffee: Coffee) => {
    const isAlreadyOnCart: Coffee | undefined = cart.items.find((item) => item.id === coffee.id)

    setCart(state => ({
      ...state,
      items: isAlreadyOnCart ? [...state.items] : [...state.items, coffee]
    }))
  }

  return (
    <CartContext.Provider value={{
      cart,
      handleAddCoffeeToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}