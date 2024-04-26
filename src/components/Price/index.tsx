import { PriceContainer } from "./styles";

interface PriceProps {
  price: number
}

export const Price = ({ price }: PriceProps) => {

  const formatNumberToCurrency = (numero: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 4 }).format(numero);
  }

  const formattedCurrencyPrice = formatNumberToCurrency(price)

  return (
    <PriceContainer>
      <span>
        R$
      </span>
      <span>
        {formattedCurrencyPrice}
      </span>
    </PriceContainer>
  )
}
