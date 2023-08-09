import { styled, createGlobalStyle } from "styled-components";

type Props = {
  test: boolean;
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
  }
`

const CardContainer = styled.ul`
  max-width: 500px;
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @media(max-width: 600px) {
    justify-content: center;
  }
`

const Card = styled.li<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 200px;
  border: 3px solid #345;
  border-radius: 5px;
  transition: 0.2s ease-in-out all;
  cursor: pointer;
  background-color: ${(prop) => prop.test ? '#FFCC00' : '#1A1A1A'}
`

const Title = styled.span<Props>`
  font-family: Arial, Helvetica, sans-serif;
  color: ${(prop) => prop.test ? '#000' : '#FFF'};
  font-size: 1.3rem;
  font-weight: bold;
`

export const Styles = {
  CardContainer,
  Card,
  Title
}