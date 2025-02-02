import { ReactNode, createContext, useEffect, useState } from "react";
import { Cart, PaymentMethod } from "../@types/cart.type";
import { Coffee } from "../@types/coffee.type";


interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextProps {
  cart: Cart
  isCoffeeOnCart: (coffee: Coffee) => boolean;
  handleAddCoffeeToCart: (coffee: Coffee) => void;
  handleRemoveCoffeeFromCart: (coffee: Coffee) => void;
  handleAddCoffeeQuantityOnCart: (coffee: Coffee) => void;
  handleRemoveCoffeeQuantityOnCart: (coffee: Coffee) => void;
  handleSetCart: (state: Cart) => void;
  handleChoosePaymentMethod: (paymentMethodDefined: PaymentMethod) => void;
  removeCartOnDeliveryConfirm: () => void;
}

export const CartContext = createContext({} as CartContextProps)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('')

  const [cart, setCart] = useState<Cart>({
    items: [],
    delivery: 0,
    totalCartValue: 0,
    totalItemsValue: 0,
    paymentMethod: paymentMethod,
    address: {
      cep: '',
      city: '',
      complement: '',
      neighbourhood: '',
      number: '',
      state: '',
      street: ''
    }
  })

  useEffect(() => {
    const hasItemsOnCart = cart.items.length;
    if (hasItemsOnCart) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

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

  const handleChoosePaymentMethod = (paymentMethodDefined: PaymentMethod) => {
    setPaymentMethod(paymentMethod)
    setCart(state => ({
      ...state,
      paymentMethod: paymentMethodDefined
    }))
  }

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

    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const handleRemoveCoffeeFromCart = (coffee: Coffee) => {
    setCart(state => ({
      ...state,
      totalCartValue: totalCartValue,
      totalItemsValue: totalItemsValue,
      items: [...state.items.filter((item) => item.id !== coffee.id)]
    }))

    localStorage.removeItem('cart')
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

    localStorage.setItem('cart', JSON.stringify(cart))
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

  const handleSetCart = (state: Cart) => {
    setCart(state)
  }

  const removeCartOnDeliveryConfirm = () => {
    handleSetCart({
      ...cart,
      items: []
    })

    localStorage.removeItem('cart')
    localStorage.removeItem('coffeeList')
  }

  return (
    <CartContext.Provider value={{
      cart,
      handleAddCoffeeToCart,
      handleRemoveCoffeeFromCart,
      isCoffeeOnCart,
      handleAddCoffeeQuantityOnCart,
      handleRemoveCoffeeQuantityOnCart,
      handleSetCart,
      handleChoosePaymentMethod,
      removeCartOnDeliveryConfirm
    }}>
      {children}
    </CartContext.Provider>
  )
}