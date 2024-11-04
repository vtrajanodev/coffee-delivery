import cartSubtitle from '../../assets/cart-subtitle.svg'
import coffeeImg from '../../assets/coffeeImg.png'
import iconTimer from '../../assets/icon-timer.svg'
import purpleCoffeIcon from '../../assets/purple-coffee-icon.svg'
import squareIcon from '../../assets/squareIcon.svg'
import { BenefitsContainer, BenefitsData } from "../Article/styles"
import { WelcomeContainer } from "./styles"

export const Welcome = () => {
  return (
    <WelcomeContainer>
      <img src={coffeeImg} alt="" />

      <BenefitsContainer>
        <BenefitsData>
          <img src={cartSubtitle} alt="" />
          <span>Compra simples e segura</span>
        </BenefitsData>
        <BenefitsData>
          <img src={iconTimer} alt="" />
          <span>Entrega rápida e rastreada</span>
        </BenefitsData>
        <BenefitsData>
          <img src={squareIcon} alt="" />
          <span>Embalagem mantém o café intacto</span>
        </BenefitsData>
        <BenefitsData>
          <img src={purpleCoffeIcon} alt="" />
          <span>O café chega fresquinho até você</span>
        </BenefitsData>
      </BenefitsContainer>
    </WelcomeContainer>
  )
}
