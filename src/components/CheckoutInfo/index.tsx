import { CheckoutInfoContainer, DeliveryInfoContainer, InfoItemsContainer } from "./styles"
import localeIcon2 from '../../assets/localeIcon2.svg'
import timeIcon2 from '../../assets/timerIcon2.svg'
import currencyIcon from '../../assets/currencyIcon.svg'

export const CheckoutInfo = () => {
  return (
    <CheckoutInfoContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

    <DeliveryInfoContainer>
      <InfoItemsContainer>
        <img src={localeIcon2} alt="" />
        <div>
          <p>Entrega em Rua João Daniel Martinelli, 102</p>
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
          <p>Cartão de crédito</p>
        </div>
      </InfoItemsContainer>
    </DeliveryInfoContainer>

    </CheckoutInfoContainer>
  )
}
