import { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Coffee } from "../../@types/coffee.type"
import { CartContext } from "../../context/CartContext"
import { CoffeeContext } from "../../context/CoffeeContext"
import { CartItem } from "../CartItem"
import { CartContainer, CartDataContainer, CartDataTitleContainer } from "./styles"

export const CartData = () => {
  const { cart, handleSetCart } = useContext(CartContext)
  const { formatNumberToCurrency } = useContext(CoffeeContext)

  useEffect(() => {
    const localStorageCart = localStorage.getItem('cart')
    if (localStorageCart) {
      handleSetCart(JSON.parse(localStorageCart))
    }
  }, [])

  const randomString = () => {

  }


  const formattedTotalCartValue = formatNumberToCurrency(cart.totalCartValue)
  const formattedTotalItemsValue = formatNumberToCurrency(cart.totalItemsValue)

  return (
    <CartDataContainer>
      <CartDataTitleContainer>Cafés selecionados</CartDataTitleContainer>

      <CartContainer>
        {cart.items.length ? cart.items.map((coffee: Coffee) => (
          <div key={coffee.id}>
            <CartItem coffee={coffee} />
            <hr />
          </div>
        )) : (
          <div>
            <h1>Carrinho vazio</h1>
            <p>O seu carrinho está vazio, volte para a página inicial e adicione alguns cafés maravilhosos 🖤</p>
            <div className="link-to-home">
              <NavLink to={"/home"}>Escolher cafés</NavLink>
            </div>
          </div>
        )
        }

        {
          !!cart.items.length && (
            <>
              <div className="payment-info">
                <div>
                  <span>Total de items</span>
                  <span>R$ {formattedTotalItemsValue}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ 5,00</span>
                </div>
                <div className="total">
                  <span>Total</span>
                  <span>R$ {formattedTotalCartValue}</span>
                </div>
              </div>
            </>
          )
        }
      </CartContainer>
    </CartDataContainer>
  )
}
