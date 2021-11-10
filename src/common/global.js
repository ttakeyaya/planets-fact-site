import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before{
    box-sizing:border-box;
  }

  html{
    font-size:62.5%;
  }
  body{
    background-color:rgb(7,7,36);
    color:rgb(255,255,255);
    overflow-x: hidden;
    margin:0;
    padding:0;
    font-family: 'Antonio', sans-serif;
    font-family: 'Spartan', sans-serif;
  }
`;