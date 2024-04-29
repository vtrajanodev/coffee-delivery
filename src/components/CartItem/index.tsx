import trashIcon from '../../assets/trashIcon.svg'
import { Coffee } from "../../@types/coffee.type"
import { Count } from "../Count"
import { CartInfoContainer, CartItemContainer, QuantityContainer } from "./styles"

interface CartItemProps {
  coffee: Coffee
}

export const CartItem = ({ coffee }: CartItemProps) => {
  return (
    <CartItemContainer>
      <img src={coffee.imgSrc} alt="" />

      <CartInfoContainer>
        <h3>{coffee.name}</h3>
        <QuantityContainer>
          <Count coffee={coffee} />
          <div className='quantity'>
            <img src={trashIcon} alt="" />
            <span>Remover</span>
          </div>
        </QuantityContainer>  
      </CartInfoContainer>

      <span>Price</span>
    </CartItemContainer>
  )
}
