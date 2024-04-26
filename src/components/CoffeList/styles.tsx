import styled from "styled-components";

export const CoffeeListTitleContainer = styled.h1`
  color: ${props => props.theme["base-title"]};
  font-family: 'Baloo 2', sans-serif;
  font-weight: 900;
  font-size: 2rem;
  margin-bottom: 2rem;

  display: block;
`

export const CoffeeListContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-wrap: wrap;

  gap: 2.5rem;
`

