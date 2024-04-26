import styled from "styled-components";

const Centralize = styled.div`
  display: flex;
  align-items: center;
`

export const CoffeeCardContainer = styled(Centralize)`
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  background-color: ${props => props.theme["base-card"]};
  padding: 0 20px 20px 20px;

  border-top-left-radius: 8px;
  border-top-right-radius: 35px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 8px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.5rem;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: ${props => props.theme["base-label"]};
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
`

export const CoffeeTagsContainer = styled(Centralize)`
  justify-content: center;
  gap: 1.25rem;
  width: 100%;
  height: 1.3rem;


  span {
    background-color: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    padding: 0.30rem;
    border-radius: 4px;
  }


  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 0.725rem;

  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
`

export const CoffeeCardFooterContainer = styled.div`
  
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;


  gap: 10px;
  
  div {
    &:last-child {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  img {
    height: 2.375rem;
    width: 2.375rem;
    background-color: ${props => props.theme["purple-dark"]};
    border-radius: 6px;
    margin: 0;
    padding: 0.50rem;
  }

  button {
    cursor: pointer;
    border: none;

    &:hover {
      filter: opacity(0.8);
    }
  }
`