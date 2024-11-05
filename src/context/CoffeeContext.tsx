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
  getCoffeeList: () => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export const CoffeeContextProvider = ({ children }: CartContextProviderProps) => {

  const [coffeeList, setCoffeeList] = useState<Coffee[]>([])

  useEffect(() => {
    const coffeeListAtLocalStorage = localStorage.getItem('coffeeList')
    if (coffeeListAtLocalStorage) {
      setCoffeeList(JSON.parse(coffeeListAtLocalStorage))
    } else {
      getCoffeeList()
    }
  }, [])

  const getCoffeeList = async () => {
    try {
      const { data } = await axios.get('https://coffee-delivery-lime-one.vercel.app/api/coffees');
      if (Array.isArray(data.coffees)) {
        setCoffeeList(data.coffees);
      } else {
        console.error('Erro: resposta da API não contém um array de cafés');
      }
    } catch (error) {
      console.error('Erro ao buscar cafés:', error);
    }
  };

  const handleSetCoffeeList = (coffees: Coffee[]) => {
    setCoffeeList(coffees)
    localStorage.setItem('coffeeList', JSON.stringify(coffees))
  }

  const formatNumberToCurrency = (numero: number) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 4 }).format(numero);
  }


  return (
    <CoffeeContext.Provider value={{
      coffeeList,
      handleSetCoffeeList,
      formatNumberToCurrency,
      getCoffeeList
    }}>
      {children}
    </CoffeeContext.Provider>
  )
}
