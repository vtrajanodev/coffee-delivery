import { useContext, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import cartIcon from '../../assets/cartIcon.svg'
import userIcon from '../../assets/user-icon.svg'
import localeIcon from '../../assets/localeIcon.svg'
import logoIcon from '../../assets/logo.svg'
import logoutIcon from '../../assets/logout-icon.svg'
import { AuthContext } from '../../context/AuthContext'
import { CartContext } from '../../context/CartContext'
import { CartIcon, CartIconContainer, HeaderContainer, ItemCount, LocaleContainer, NavContainer } from "./styles"

export const Header = () => {

  const { cart, handleSetCart } = useContext(CartContext)
  const { user, SignOut } = useContext(AuthContext)

  const navigate = useNavigate();
  const route = useLocation()

  useEffect(() => {
    const localStorageCart = localStorage.getItem('cart')
    if (localStorageCart) {
      handleSetCart(JSON.parse(localStorageCart))
    }
  }, [])

  const logout = async () => {
    await SignOut()
    handleSetCart({ ...cart, items: [] })
    navigate('/login')
  }

  return (
    <HeaderContainer>
      <NavLink to={'/home'}><img src={logoIcon} alt="" /></NavLink>

      <NavContainer>
        <div className='account-info'>
          <img src={`${user?.photoUrl}`} alt="" />

          <LocaleContainer>
            <span>{user?.name}</span>
            <img src={userIcon} />
          </LocaleContainer>
        </div>


        <CartIconContainer>
          <NavLink to={'/cart'}>
            <CartIcon src={cartIcon} alt="Cart" />
            {route.pathname !== '/finalize' && <ItemCount>{cart.items.length}</ItemCount>}
          </NavLink>
        </CartIconContainer>

        <button title='Sair' onClick={logout}><img src={logoutIcon} alt="" /></button>
      </NavContainer>
    </HeaderContainer>
  )
}
