import styled from "styled-components";

export const CheckoutInfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;


  h1 {
    color: ${props => props.theme["yellow-dark"]};
    font-size: 32px;
    font-weight: 900;
    font-family: 'Baloo 2', sans-serif;
  }

p {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: ${props => props.theme["base-subtitle"]};
  margin-bottom: 40px;
} 
`

export const DeliveryInfoContainer = styled.div`
  /* width: 526px;
  height: 270px; */

  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 80px;

  
  
  border-top: 1px solid #8047F8;
  border-right: 1px solid #8047F8;
  border-bottom: 1px solid #DBAC2C;
  border-left: 1px solid #DBAC2C;
  border-radius: 6px 44px 6px 44px;
`

export const InfoItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    margin: 0px;
  }

  img {
    margin: 12px;
  }
`