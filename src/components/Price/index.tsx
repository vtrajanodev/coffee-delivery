import { useContext } from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { PriceContainer } from "./styles";

interface PriceProps {
  price: number
}

export const Price = ({ price }: PriceProps) => {

  const { formatNumberToCurrency } = useContext(CoffeeContext)
  const formattedCoffeePrice = formatNumberToCurrency(price)

  return (
    <PriceContainer>
      <span>
        R$
      </span>
      <span>
        {formattedCoffeePrice}
      </span>
    </PriceContainer>
  )
}
