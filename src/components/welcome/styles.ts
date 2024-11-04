import styled from "styled-components";

export const WelcomeContainer = styled.div`
  padding: 64px;
  gap: 64px; 
  width: 50%;
  height: 100vh;
  background: ${props => props.theme["base-background"]};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`