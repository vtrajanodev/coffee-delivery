import styled from "styled-components";

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 96px;
  height: 32px;
  background-color: ${props => props.theme["base-button"]};
  gap: 0.75rem;
  padding: 0.5rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;

  border-radius: 4px;

  button {
    &:not(:nth-child(2)) {
      color: ${props => props.theme.purple};
      font-size: 1.5rem;
      flex: 1;
      border: none;
      background-color: inherit;
      cursor: pointer;  
    }
  }
`