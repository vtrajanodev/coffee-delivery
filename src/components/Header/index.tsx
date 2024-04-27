import { NavLink } from 'react-router-dom'
import cartIcon from '../../assets/cartIcon.svg'
import localeIcon from '../../assets/localeIcon.svg'
import logoIcon from '../../assets/logo.svg'
import { CartIconContainer, HeaderContainer, LocaleContainer, NavContainer } from "./styles"

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to={'/home'}><img src={logoIcon} alt="" /></NavLink>

      <NavContainer>
        <LocaleContainer>
          <img src={localeIcon} />
          <span>Manaus, AM</span>
        </LocaleContainer>

        <CartIconContainer>
          <NavLink to={'/cart'}><img src={cartIcon} alt="" /></NavLink>
        </CartIconContainer>
      </NavContainer>
    </HeaderContainer>
  )
}
