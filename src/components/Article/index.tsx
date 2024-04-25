import cartSubtitle from '../../assets/cart-subtitle.svg'
import iconTimer from '../../assets/icon-timer.svg'
import coffeImg from '../../assets/coffeeImg.png'
import squareIcon from '../../assets/squareIcon.svg'
import purpleCoffeIcon from '../../assets/purple-coffee-icon.svg'
import { BenefitsContainer, BenefitsData, IntroContainer, IntroImgContainer, IntroTextContainer } from "./styles"

export const Article = () => {
  return (
    <IntroContainer>
      <IntroTextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

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
      </IntroTextContainer>
      <IntroImgContainer>
        <img src={coffeImg} alt="" />
      </IntroImgContainer>
    </IntroContainer>
  )
}
