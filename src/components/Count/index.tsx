import { CountContainer } from "./styles"

interface CountProps {
  quantity: number
}

export const Count = ({ quantity }: CountProps) => {
  return (
    <CountContainer>
      <span>-</span>
      <span>{quantity}</span>
      <span>+</span>
    </CountContainer>
  )
}
