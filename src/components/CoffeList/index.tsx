import { CoffeeCard } from "../CoffeeCard"
import { CoffeListContainer, CoffeeListTitleContainer } from "./styles"

export const CoffeeList = () => {
  return (
    <>
      <CoffeeListTitleContainer>Nossos cafés</CoffeeListTitleContainer>

      <CoffeListContainer>
        <CoffeeCard />
      </CoffeListContainer>
    </>
  )
}
