import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee } from "../@types/coffee.type";

interface CartContextProviderProps {
  children: ReactNode
}

interface CoffeeContextType {
  coffeeList: Coffee[];
  handleSetCoffeeList: (coffees: Coffee[]) => void,
  formatNumberToCurrency: (numero: number) => string,
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export const CoffeeContextProvider = ({ children }: CartContextProviderProps) => {

  const [coffeeList, setCoffeeList] = useState<Coffee[]>([])

  useEffect(() => {
    getCoffeeList()
  }, [])

  const getCoffeeList = async () => {
    const { data } = await axios.get<Coffee[]>('http://localhost:3000/coffees')
    setCoffeeList(data)
  }

  const handleSetCoffeeList = (coffees: Coffee[]) => {
    setCoffeeList(coffees)
  }

  const formatNumberToCurrency = (numero: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 4 }).format(numero);
  }


  return (
    <CoffeeContext.Provider value={{
      coffeeList,
      handleSetCoffeeList,
      formatNumberToCurrency
    }}>
      {children}
    </CoffeeContext.Provider>
  )
}
