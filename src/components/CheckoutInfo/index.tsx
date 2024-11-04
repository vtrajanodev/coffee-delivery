import { useContext, useEffect } from "react"
import currencyIcon from '../../assets/currencyIcon.svg'
import localeIcon2 from '../../assets/localeIcon2.svg'
import timeIcon2 from '../../assets/timerIcon2.svg'
import { CartContext } from "../../context/CartContext"
import { CheckoutInfoContainer, DeliveryInfoContainer, InfoItemsContainer } from "./styles"

export const CheckoutInfo = () => {

  const { cart, removeCartOnDeliveryConfirm } = useContext(CartContext)

  useEffect(() => {
    removeCartOnDeliveryConfirm();
  }, [])

  const paymentMethodLabel = (paymentMethod: string) => {
    switch (paymentMethod) {
      case 'creditCard':
        return 'Cartão de crédito';
      case 'debitCard':
        return 'Cartão de débito'
      case 'money':
        return 'Dinheiro'
    }
  }

  return (
    <CheckoutInfoContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <DeliveryInfoContainer>
        <InfoItemsContainer>
          <img src={localeIcon2} alt="" />
          <div>
            <p>{`Entrega em ${cart.address.street}, ${cart.address.number}`}</p>
            <p>{`${cart.address.neighbourhood} - ${cart.address.city}, ${cart.address.state}`}</p>
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
            <p>{paymentMethodLabel(cart.paymentMethod)}</p>
          </div>
        </InfoItemsContainer>
      </DeliveryInfoContainer>

    </CheckoutInfoContainer>
  )
}
