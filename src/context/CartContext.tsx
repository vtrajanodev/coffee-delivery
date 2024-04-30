import { ReactNode, createContext, useEffect, useState } from "react";
import { Cart } from "../@types/cart.type";
import { Coffee } from "../@types/coffee.type";


interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextProps {
  cart: Cart
  isCoffeeOnCart: (coffee: Coffee) => boolean
  handleAddCoffeeToCart: (coffee: Coffee) => void
  handleRemoveCoffeeFromCart: (coffee: Coffee) => void,
  handleAddCoffeeQuantityOnCart: (coffee: Coffee) => void,
  handleRemoveCoffeeQuantityOnCart: (coffee: Coffee) => void,
}

export const CartContext = createContext({} as CartContextProps)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {

  const [cart, setCart] = useState<Cart>({
    items: [],
    delivery: 0,
    totalCartValue: 0,
    totalItemsValue: 0
  })

  const totalItemsValue = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFare = 5.00
  const totalCartValue = totalItemsValue + deliveryFare

  useEffect(() => {
    setCart(state => ({
      ...state,
      items: [...state.items],
      totalCartValue: totalCartValue,
      totalItemsValue: totalItemsValue,
    }))
  }, [totalCartValue, totalItemsValue])

  const isCoffeeOnCart = (coffee: Coffee) => {
    return !!cart.items.find((item) => item.id === coffee.id)
  }

  const handleAddCoffeeToCart = (coffee: Coffee) => {
    setCart(state => ({
      ...state,
      totalCartValue: totalCartValue,
      totalItemsValue: totalItemsValue,
      items: isCoffeeOnCart(coffee) ? [...state.items] : [...state.items, coffee]
    }))
  }

  const handleRemoveCoffeeFromCart = (coffee: Coffee) => {
    setCart(state => ({
      ...state,
      totalCartValue: totalCartValue,
      totalItemsValue: totalItemsValue,
      items: [...state.items.filter((item) => item.id !== coffee.id)]
    }))
  }

  const handleAddCoffeeQuantityOnCart = (coffee: Coffee) => {

    setCart(state => ({
      ...state,
      totalCartValue: totalCartValue,
      totalItemsValue: totalItemsValue,
      items: [...state.items.map((item) => {
        if (item.id === coffee.id) {
          return { ...item, quantity: coffee.quantity + 1 }
        } else {
          return item
        }
      })]
    }))
  }

  const handleRemoveCoffeeQuantityOnCart = (coffee: Coffee) => {


    setCart(state => ({
      ...state,
      totalCartValue: totalCartValue,
      totalItemsValue: totalItemsValue,
      items: [...state.items.map((item) => {
        if (item.id === coffee.id) {
          return { ...item, quantity: coffee.quantity - 1 }
        } else {
          return item
        }
      })]
    }))
  }

  return (
    <CartContext.Provider value={{
      cart,
      handleAddCoffeeToCart,
      handleRemoveCoffeeFromCart,
      isCoffeeOnCart,
      handleAddCoffeeQuantityOnCart,
      handleRemoveCoffeeQuantityOnCart,

    }}>
      {children}
    </CartContext.Provider>
  )
}