import styled from "styled-components";

export const SignInContainer = styled.div`
  font-family: "Baloo 2", sans-serif;

  width: 50%;
  height: 100vh;
  background: ${(props) => props.theme["base-card"]};

  header {
    display: flex;
    align-items: center;
    height: 100px;
    justify-content: center;
  }

  h3 {
    margin-bottom: 12px;
  }
`;

export const FormContainer = styled.div`
  height: calc(100vh - 300px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 280px;
      height: 42px;
      border: none;
      outline: none;
      border-radius: 8px;
      padding-left: 8px;
      caret-color: ${(props) => props.theme["purple-dark"]};
      background-color: ${(props) => props.theme["base-button"]};
      margin-top: 12px;
      font-family: "Baloo 2", sans-serif;
    }

    button {
      cursor: pointer;
      margin-top: 12px;
      background-color: ${(props) => props.theme["yellow-dark"]};
      outline: none;
      border: none;
      border-radius: 4px;
      height: 42px;
      color: white;
      font-weight: bold;
      transition: background-color 0.5s, color 0.5s; /* Adicionando transição */
      font-family: "Baloo 2", sans-serif;

      &:hover {
        opacity: 0.9;
        background-color: white;
        color: #000;
      }
    }
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 12px;

  span {
    margin-bottom: 25px;
  }


  strong {
    margin: 32px 0;
  }

  div.signin-info {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 18px;
    }

    a {
      text-decoration: none;
      color: ${props => props.theme["yellow-dark"]};
      font-weight: bold;

      &:hover {
        opacity: 0.8;
      }
    }
    
  }
`;

export const SocialButtonsContainer = styled.div`
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    line-height: 42px;
    width: 264px;
    padding: 4px 8px;

    img {
      width: 26px;
    }

    &:first-child {
      margin-right: 14px;
      background-color: #fff;
      color: #4F4F4F	;
      font-weight: bold;
    }

    &:last-child {
      background-color: #fff;
      color: #0866ff;
      font-weight: bold;
    }

    &:hover {
      opacity: 0.8;
    }

  
  }
`
