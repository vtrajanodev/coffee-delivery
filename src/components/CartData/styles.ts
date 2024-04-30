import styled from "styled-components";

export const CartDataTitleContainer = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme["base-subtitle"]};

  margin-bottom: 0.9rem;
`;

export const CartDataContainer = styled.div`
  padding: 56px 95px;

  div.payment-info {
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 14px;
    }

    div > span:first-child {
      font-size: 14px;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      color: ${(props) => props.theme["base-text"]};
    }

    div > span:last-child {
      color: ${props => props.theme["base-text"]};
    }

    div.total {
      span {
        font-size: 20px;
        font-family: 'Roboto' sans-serif;
        font-weight: 700;
        color: ${props => props.theme["base-subtitle"]};
      }
    }
  }
`;

export const CartContainer = styled.div`
  padding: 40px;
  border-radius: 6px 44px 6px 44px;

  background-color: ${(props) => props.theme["base-card"]};

  width: 480px;
  max-height: 600px;
  overflow-y: scroll;

  hr {
    margin: 24px 0;
    color: ${(props) => props.theme["base-button"]};
  }

  h1 {
    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: ${props => props.theme["base-subtitle"]};
    margin-bottom: 1rem;
  }

  p {
    font-size: 15px;
    color: ${props => props.theme["base-title"]};
  }

  div.link-to-home {
    text-align: center;
    margin-top: 2rem;

    a {
      text-decoration: none;
      color: ${props => props.theme.purple};
      background-color: ${props => props.theme["purple-light"]};
      padding: 12px;
      border-radius: 4px;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  div.confirm-order-button {
    a {
      color: ${props => props.theme["base-button"]};
      text-decoration: none;
      width: 100%;
      height: 46px;
      margin: 0;

      text-align: center;
      margin-top: 1.8rem;
      background-color: ${props => props.theme["yellow-dark"]};
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: #000000;
        background-color: ${props => props.theme["yellow"]};
      }
    }
  }
`;
