import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;
  width: 85%;
  position: fixed;
  top: 0;
  background-color: #fafafa;
  z-index: 1000;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;


  height: 2.375rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 2.375rem;
    border: none;
    outline: none;
    width: 2.8rem;
    background-color: ${(props) => props.theme["purple-light"]};
    border-radius: 4px;
  }

  div.account-info {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 48px;

    > img {
      &:first-child {
        border-radius: 50%;
        width: 40px;
        margin-right: 12px;
      }
    }
  }
`;

export const LocaleContainer = styled(NavContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  width: auto;
  padding: 6px 12px;
  border-radius: 4px;

  gap: 8px;

  img {
    width: 16px;
  }
`;

export const CartIconContainer = styled(NavContainer)`
  position: relative; /* Adicione position relative */
  width: 2.375rem;
  padding: 0.25rem;
  background-color: ${(props) => props.theme["yellow-light"]};
  
  /* margin-right: 64px; */
  margin: 0 64px 0 12px;
`;

export const CartIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${(props) => props.theme["yellow"]};
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;
