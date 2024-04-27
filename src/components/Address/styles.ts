import styled from "styled-components";

export const AddressTitleContainer = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme["base-subtitle"]};

  margin-bottom: 0.9rem;
`;

export const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  width: 45rem;
  height: 23.25rem;
  border-radius: 8px;
  padding: 2.5rem;

  background-color: ${(props) => props.theme["base-card"]};
`;

export const FormHeaderContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const FormHeaderTextContainer = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const FormFieldsContainer = styled.form`
  input {
    height: 2.8rem;
    border: none;
    border-radius: 4px;
    background-color: ${props => props.theme["base-input"]};
    padding-left: 0.5rem;
    caret-color: ${props => props.theme["purple-dark"]};

    &:focus {
      outline: 1px solid ${props => props.theme.purple};
    }

    input::placeholder {
      font-family: 'Roboto', sans-serif;
      font-size: 0.8rem;
      color: ${props => props.theme["base-label"]};
    }

    &.street {
      width: 100%;
    }
  }

  div.block {
    div {
      margin-bottom: 1rem;
    }

    display: block;
    margin-bottom: 1rem;
  }

  div.flex-1 {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 12px;
    margin-bottom: 1rem;
  }

  div.flex-2 {
    display: flex;
    gap: 12px;
  }
`;
