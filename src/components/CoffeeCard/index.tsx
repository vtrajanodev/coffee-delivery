import coffee1 from '../../assets/coffeList/coffee-1.png'
import shoppingCartSimple from '../../assets/coffeList/ShoppingCartSimple.svg'
import { Count } from '../Count'
import { Price } from '../Price'
import { CoffeeCardContainer, CoffeeCardFooterContainer, CoffeeTagsContainer } from "./styles"

export const CoffeeCard = () => {
  return (
    <CoffeeCardContainer>
      <img src={coffee1} alt="" />

      <CoffeeTagsContainer>TRADICIONAL</CoffeeTagsContainer>

      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <CoffeeCardFooterContainer>
        <Price />
        <div>
          <Count />
          <img src={shoppingCartSimple} alt="" />
        </div>
      </CoffeeCardFooterContainer>

    </CoffeeCardContainer >
  )
}
