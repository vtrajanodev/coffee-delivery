import styled from "styled-components";

export const SignUpContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.div`
  width: 960px;
  height: 600px; /* Definindo altura fixa */
  background-color: ${props => props.theme["base-input"]};
  border-radius: 12px;
  overflow-y: auto; /* Adicionando rolagem vertical se necessário */

  padding-top: 22px;

  div.title {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 22px;
      font-weight: 500;
    }
  }

  form {
    margin: 0 auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 80px;

    div {
      width: 100%;
      height: 80px;

      input {
      width: 100%;
      height: 40px;
      border: none;
      border-radius: 4px;
      padding-left: 12px;
      caret-color: purple;
      outline: none;
      margin-bottom: 8px;
    }

    span {
      color: red;
      align-self: flex-start;
      padding-left: 5px;
    }
    }

    

    button {
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
      line-height: 40px;
      border: none;
      background-color: ${props => props.theme["yellow-dark"]};
      color: ${props => props.theme["base-input"]};;
      font-weight: bold;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  margin-top: 32px;
  height: 100px;

  a {
      text-decoration: none;
      color: ${props => props.theme["yellow-dark"]};
      font-weight: bold;

      &:hover {
        opacity: 0.8;
      }
    }
`