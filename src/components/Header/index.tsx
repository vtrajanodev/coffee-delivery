import localeIcon from '../../assets/localeIcon.svg'
import logoIcon from '../../assets/logo.svg'
import cartIcon from '../../assets/cartIcon.svg'
import { CartIconContainer, HeaderContainer, LocaleContainer, NavContainer } from "./styles"

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoIcon} alt="" />

      <NavContainer>
        <LocaleContainer>
          <img src={localeIcon} />
          <span>Manaus, AM</span>
        </LocaleContainer>

        <CartIconContainer>
          <img src={cartIcon} alt="" />
        </CartIconContainer>
      </NavContainer>
    </HeaderContainer>
  )
}
