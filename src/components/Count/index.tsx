import { useContext } from "react"
import { Coffee } from "../../@types/coffee.type"
import { CartContext } from "../../context/CartContext"
import { CoffeeContext } from "../../context/CoffeeContext"
import { CountContainer } from "./styles"

interface CountProps {
  coffee: Coffee
}

export const Count = ({ coffee }: CountProps) => {

  const { coffeeList, handleSetCoffeeList } = useContext(CoffeeContext)
  const { handleRemoveCoffeeFromCart } = useContext(CartContext)

  
  const handleAddCoffeeQuantity = () => {
    const updatedCoffeeList = coffeeList.map((item: Coffee) => {
      if (item.id === coffee.id) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })

    handleSetCoffeeList(updatedCoffeeList)
  }

  const handleRemoveCoffeeQuantity = () => {

    const updatedCoffeeList = coffeeList.map((item: Coffee) => {
      if (item.id === coffee.id) {
        item.quantity === 1 && handleRemoveCoffeeFromCart(coffee);
        return { ...item, quantity: item.quantity - 1 }
      } else {
        return item
      }
    })

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
