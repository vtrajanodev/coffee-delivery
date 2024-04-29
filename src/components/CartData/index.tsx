import { useContext } from "react"
import { Coffee } from "../../@types/coffee.type"
import { CartContext } from "../../context/CartContext"
import { CartItem } from "../CartItem"
import { CartContainer, CartDataContainer, CartDataTitleContainer } from "./styles"

export const CartData = () => {
  const { cart } = useContext(CartContext)

  return (
    <CartDataContainer>
      <CartDataTitleContainer>Cafés selecionados</CartDataTitleContainer>

      <CartContainer>
        {cart.items.length ? cart.items.map((coffee: Coffee) => (
          <>
            <CartItem coffee={coffee} />

            <hr />
          </>
        )) : (<h1>Carrinho vazio</h1>)
        }

        {
          !!cart.items.length && (
            <div className="payment-info">
              <div>
                <span>Total de items</span>
                <span>0</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>0</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>0</span>
              </div>
            </div>
          )
        }

      </CartContainer>
    </CartDataContainer>
  )
}
