import { CheckoutInfoContainer, DeliveryInfoContainer, InfoItemsContainer } from "./styles"
import localeIcon2 from '../../assets/localeIcon2.svg'
import timeIcon2 from '../../assets/timerIcon2.svg'
import currencyIcon from '../../assets/currencyIcon.svg'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CheckoutInfo = () => {

  const { cart } = useContext(CartContext)

  return (
    <CheckoutInfoContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

    <DeliveryInfoContainer>
      <InfoItemsContainer>
        <img src={localeIcon2} alt="" />
        <div>
          <p>{`Entrega em ${cart.address.street}, ${cart.address.number}`}</p>
          <p>Farrapos - Porto Alegre, RS</p>
        </div>
      </InfoItemsContainer>

      <InfoItemsContainer>
        <img src={timeIcon2} alt="" />
        <div>
          <p>Previsão de entrega</p>
          <p>20 min - 30 min</p>
        </div>
      </InfoItemsContainer>

      <InfoItemsContainer>
        <img src={currencyIcon} alt="" />
        <div>
          <p>Pagamento na entrega</p>
          <p>{cart.paymentMethod}</p>
        </div>
      </InfoItemsContainer>
    </DeliveryInfoContainer>

    </CheckoutInfoContainer>
  )
}
