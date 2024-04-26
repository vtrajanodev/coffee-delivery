import shoppingCartSimple from '../../assets/ShoppingCartSimple.svg';
import { Count } from '../Count';
import { Price } from '../Price';
import { CoffeeCardContainer, CoffeeCardFooterContainer, CoffeeTagsContainer } from "./styles";

interface CoffeeCardProps {
  imgSrc: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
  quantity: number
}

export const CoffeeCard = ({ imgSrc, tags, name, description, price, quantity }: CoffeeCardProps) => {

  const isUniqueTag = tags?.length >= 1

  return (
    <CoffeeCardContainer>
      <img src={imgSrc} alt="" />

      <CoffeeTagsContainer isUniqueTag={isUniqueTag}>
        {tags?.map((tag: string) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTagsContainer>

      <h2>{name}</h2>
      <p>{description}</p>

      <CoffeeCardFooterContainer>
        <Price price={price} />
        <div>
          <Count quantity={quantity} />
          <img src={shoppingCartSimple} alt="" />
        </div>
      </CoffeeCardFooterContainer>

    </CoffeeCardContainer >
  )
} 
