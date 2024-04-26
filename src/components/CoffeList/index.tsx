import axios from "axios"
import { useEffect, useState } from "react"
import { Coffee } from "../../@types/coffee.type"
import { CoffeeCard } from "../CoffeeCard"
import { CoffeeListContainer, CoffeeListTitleContainer } from "./styles"

export const CoffeeList = () => {

  const [coffeeList, setCoffeeList] = useState<Coffee[]>([])

  useEffect(() => {
    getCoffeeList()
  }, [])

  const getCoffeeList = async () => {
    const { data } = await axios.get<Coffee[]>('http://localhost:3000/coffees')
    setCoffeeList(data)
    console.log(data)
  }

  return (
    <>
      <CoffeeListTitleContainer>Nossos cafés</CoffeeListTitleContainer>

      <CoffeeListContainer>
        {
          coffeeList && coffeeList.map(({ id, imgSrc, tags, name, description, price, quantity }: Coffee, index) => (
            <CoffeeCard
              key={id}
              imgSrc={imgSrc}
              tags={tags}
              name={name}
              description={description}
              price={price}
              quantity={quantity}
            />
          ))
        }
      </CoffeeListContainer>
    </>
  )
}
