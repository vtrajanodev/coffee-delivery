import cartSubtitle from '../../assets/cart-subtitle.svg'
import iconTimer from '../../assets/icon-timer.svg'
import coffeImg from '../../assets/coffeeImg.png'
import squareIcon from '../../assets/squareIcon.svg'
import purpleCoffeIcon from '../../assets/purple-coffee-icon.svg'
import { IntroContainer, IntroImgContainer, IntroTextContainer } from "./styles"

export const Article = () => {
  return (
    <IntroContainer>
      <IntroTextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

        <div className='benefits'>
          <div>
            <img src={cartSubtitle} alt="" />
            <span>Compra simples e segura</span>
          </div>
          <div>
            <img src={iconTimer} alt="" />
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <img src={squareIcon} alt="" />
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <img src={purpleCoffeIcon} alt="" />
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
      </IntroTextContainer>
      <IntroImgContainer>
        <img src={coffeImg} alt="" />
      </IntroImgContainer>
    </IntroContainer>
  )
}
