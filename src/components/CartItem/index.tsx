import { useContext } from 'react'
import { Coffee } from "../../@types/coffee.type"
import trashIcon from '../../assets/trashIcon.svg'
import { CartContext } from '../../context/CartContext'
import { CoffeeContext } from '../../context/CoffeeContext'
import { Count } from "../Count"
import { CartInfoContainer, CartItemContainer, QuantityContainer } from "./styles"

interface CartItemProps {
  coffee: Coffee
}

export const CartItem = ({ coffee }: CartItemProps) => {
  const { handleRemoveCoffeeFromCart } = useContext(CartContext)
  const { coffeeList, handleSetCoffeeList, formatNumberToCurrency } = useContext(CoffeeContext)

  const formattedCoffeePrice = formatNumberToCurrency(coffee.price * coffee.quantity)


  const setQuantityToZero = () => {
    const updatedList = coffeeList?.map((item) => {
      if (item.id === coffee.id) {
        return { ...item, quantity: 0 }
      } else {
        return item
      }
    })

    handleSetCoffeeList(updatedList)
    handleRemoveCoffeeFromCart(coffee)
  }

  return (
    <CartItemContainer>
      <img src={coffee.imgSrc} alt="" />

      <CartInfoContainer>
        <h3>{coffee.name}</h3>
        <QuantityContainer>
          <Count coffee={coffee} />
          <button className='quantity' onClick={() => setQuantityToZero()}>
            <img src={trashIcon} alt="" />
            <span>Remover</span>
          </button>
        </QuantityContainer>
      </CartInfoContainer>

      <span>{`R$ ${formattedCoffeePrice}`}</span>
    </CartItemContainer>
  )
}
