import { Address } from "../../components/Address"
import { CartData } from "../../components/CartData"
import { CartContainer } from "./styles"

export const Cart = () => {
  return (
    <CartContainer>
      <Address />
      <CartData />
    </CartContainer>
  )
}
