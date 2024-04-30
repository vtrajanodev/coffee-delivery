import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;

  img {
    width: 64px;
    height: 64px;

    margin-right: 20px;
  }

  span {
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    line-height: 20.8px;
    color: ${props => props.theme["base-text"]};
  }
`

export const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
margin-right: 20px;
  gap: 8px;

  h3 {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${props => props.theme["base-subtitle"]};
    margin-right: 50px;
  }
`

export const QuantityContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 8px;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 32px;
    background-color: ${props => props.theme["base-button"]};
    margin-left: 8px;
    border: none;
    border-radius: 4px;

    img {
      display: flex;
      align-items: center;
      width: 16px;
      height: 16px;
      margin-right: 6px;
    }

    span {
      font-weight: 400;
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
      color: ${props => props.theme["base-text"]};
      color: ${props => props.theme.purple};
      margin-left: 1rem;
    }
  }
  
`