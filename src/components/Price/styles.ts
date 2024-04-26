import styled from "styled-components";

export const PriceContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;

width: 100%;
  span {
    font-family: 'Baloo 2', sans-serif;
    color: ${props => props.theme["base-text"]};

    &:last-child {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 900;
      font-size: 1.75rem;
      margin-left: 0.15rem;
    }
  }
`