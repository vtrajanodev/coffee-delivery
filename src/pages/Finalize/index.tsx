import deliveryImg from '../../assets/deliveryImg.png'
import { CheckoutInfo } from "../../components/CheckoutInfo"
import { FinalizeContainer, ImgContainer } from "./styles"

export const Finalize = () => {
  return (
    <FinalizeContainer>
      <CheckoutInfo />

      <ImgContainer>
        <img src={deliveryImg} alt="" />
      </ImgContainer>
    </FinalizeContainer>
  )
}
