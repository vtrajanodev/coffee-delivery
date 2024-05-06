import { useContext, useEffect } from "react"
import { Coffee } from "../../@types/coffee.type"
import { CoffeeCard } from "../CoffeeCard"
import { CoffeeListContainer, CoffeeListTitleContainer } from "./styles"
import { CoffeeContext } from "../../context/CoffeeContext"

export const CoffeeList = () => {

  const { coffeeList, handleSetCoffeeList } = useContext(CoffeeContext)

  useEffect(() => {
    const localStorageCoffeeList = localStorage.getItem('coffeeList')
    if (localStorageCoffeeList) handleSetCoffeeList(JSON.parse(localStorageCoffeeList))
  }, [])

  return (
    <>
      <CoffeeListTitleContainer>Nossos cafés</CoffeeListTitleContainer>

      <CoffeeListContainer>
        {
          coffeeList && coffeeList.map((coffee: Coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee}/>
          ))
        }
      </CoffeeListContainer>
    </>
  )
}
