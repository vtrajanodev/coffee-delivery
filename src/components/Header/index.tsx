import { useContext, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import cartIcon from '../../assets/cartIcon.svg'
import localeIcon from '../../assets/localeIcon.svg'
import logoIcon from '../../assets/logo.svg'
import { CartContext } from '../../context/CartContext'
import { CartIcon, CartIconContainer, HeaderContainer, ItemCount, LocaleContainer, NavContainer } from "./styles"

export const Header = () => {

  const { cart, handleSetCart } = useContext(CartContext)

  useEffect(() => {
    const localStorageCart = localStorage.getItem('cart')
    if (localStorageCart) {
      handleSetCart(JSON.parse(localStorageCart))
    }
  }, [])

  const route = useLocation()

  return (
    <HeaderContainer>
      <NavLink to={'/home'}><img src={logoIcon} alt="" /></NavLink>

      <NavContainer>
        <LocaleContainer>
          <img src={localeIcon} />
          <span>Manaus, AM</span>
        </LocaleContainer>

        <CartIconContainer>
          <NavLink to={'/cart'}>
            <CartIcon src={cartIcon} alt="Cart" />
            {route.pathname !== '/finalize' && <ItemCount>{cart.items.length}</ItemCount>}
          </NavLink>
        </CartIconContainer>
      </NavContainer>
    </HeaderContainer>
  )
}
