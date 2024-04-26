import { Coffee } from '../../@types/coffee.type';
import shoppingCartSimple from '../../assets/ShoppingCartSimple.svg';
import { Count } from '../Count';
import { Price } from '../Price';
import { CoffeeCardContainer, CoffeeCardFooterContainer, CoffeeTagsContainer } from "./styles";

interface CoffeeCardProps {
  coffee: Coffee
}

export const CoffeeCard = ({coffee }: CoffeeCardProps) => {

  return (
    <CoffeeCardContainer>
      <img src={coffee.imgSrc} alt="" />

      <CoffeeTagsContainer>
        {coffee.tags?.map((tag: string) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTagsContainer>

      <h2>{coffee.name}</h2>
      <p>{coffee.description}</p>

      <CoffeeCardFooterContainer>
        <Price price={coffee.price} />
        <div>
          <Count coffee={coffee} />
          <img src={shoppingCartSimple} alt="" />
        </div>
      </CoffeeCardFooterContainer>

    </CoffeeCardContainer >
  )
} 
