import { useContext, useEffect } from "react"
import { Coffee } from "../../@types/coffee.type"
import { CoffeeContext } from "../../context/CoffeeContext"
import { CoffeeCard } from "../CoffeeCard"
import { CoffeeListContainer, CoffeeListTitleContainer } from "./styles"

export const CoffeeList = () => {

  const { coffeeList, handleSetCoffeeList, getCoffeeList } = useContext(CoffeeContext)

  useEffect(() => {
    const localStorageCoffeeList = localStorage.getItem('coffeeList')
    if (localStorageCoffeeList?.length) {
      handleSetCoffeeList(JSON.parse(localStorageCoffeeList))
    } else {
      getCoffeeList()
    }
  }, [])

  return (
    <>
      <CoffeeListTitleContainer>Nossos cafés</CoffeeListTitleContainer>

      <CoffeeListContainer>
        {
          coffeeList && coffeeList.map((coffee: Coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))
        }
      </CoffeeListContainer>
    </>
  )
}
