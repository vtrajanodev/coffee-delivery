import { useContext, useEffect } from "react"
import { Coffee } from "../../@types/coffee.type"
import { CartContext } from "../../context/CartContext"
import { CoffeeContext } from "../../context/CoffeeContext"
import { CountContainer } from "./styles"

interface CountProps {
  coffee: Coffee
}

export const Count = ({ coffee }: CountProps) => {

  const { coffeeList, handleSetCoffeeList } = useContext(CoffeeContext)
  const { handleRemoveCoffeeFromCart, handleAddCoffeeQuantityOnCart, handleRemoveCoffeeQuantityOnCart, handleAddCoffeeToCart } = useContext(CartContext)


  useEffect(() => {
    const localStorageCoffeeList = localStorage.getItem('coffeeList')
    if (localStorageCoffeeList) handleSetCoffeeList(JSON.parse(localStorageCoffeeList))
  }, [])

  const handleAddCoffeeQuantity = () => {
    const updatedCoffeeList = coffeeList?.map((item: Coffee) => {
      if (item.id === coffee.id) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })

    handleAddCoffeeToCart(coffee)
    handleAddCoffeeQuantityOnCart(coffee)
    handleSetCoffeeList(updatedCoffeeList)
  }

  const handleRemoveCoffeeQuantity = () => {

    const updatedCoffeeList = coffeeList?.map((item: Coffee) => {
      const hasOneQuantity = item.quantity === 1

      if (item.quantity === 0) return item;

      if (item.id === coffee.id) {
        hasOneQuantity && handleRemoveCoffeeFromCart(coffee);
        return { ...item, quantity: item.quantity - 1 }
      } else {
        return item
      }
    })

    handleRemoveCoffeeQuantityOnCart(coffee)
    handleSetCoffeeList(updatedCoffeeList)
  }

  return (
    <CountContainer>
      <button onClick={() => handleRemoveCoffeeQuantity()}>-</button>
      <span>{coffee.quantity}</span>
      <button onClick={() => handleAddCoffeeQuantity()}>+</button>
    </CountContainer>
  )
}
