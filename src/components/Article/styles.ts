import styled from "styled-components";

export const IntroContainer = styled.article`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 6.25rem 4rem;
`

export const IntroTextContainer = styled.div`
  width: 50%;

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 1rem;
  }

  p {
    font-size: 20px;
    line-height: 20.8px;
    color: ${props => props.theme["base-subtitle"]};
    font-family: 'Roboto', sans-serif;
  }
`
export const BenefitsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`

export const BenefitsData = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const IntroImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
`