import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.375rem;
  
`

export const LocaleContainer = styled(NavContainer)`
  background-color: ${props => props.theme["purple-light"]};
  color: ${props => props.theme["purple-dark"]}; 
  width: 8.9375rem;
  border-radius: 6px;

  gap: 0.25rem;
  margin-right: 0.75rem;
`

export const CartIconContainer = styled(NavContainer)`
width: 2.375rem;
  padding: 0.25rem;
  background-color: ${props => props.theme["yellow-light"]};
`
