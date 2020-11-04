import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

  /* @media screen and (min-width: 1570px) and (min-height: 700px) and (max-width: 1900px) and (max-height: 950px) { */
  body {
    font-family: 'Lobster', cursive;
    color: #fbb70d;
    text-shadow: 0.08em 0.05em black;
    padding: 1.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`

export default GlobalStyle;
