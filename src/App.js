import React, {useState} from 'react';
import { Outlet} from "react-router-dom"
import { GlobalStyles } from "./common/global";
import { Header, Title, Main } from "./App.styled";
import { Navigation } from "./components/Navigation";
import {Toggle} from "./components/Toggle";
import { ThemeProvider } from 'styled-components';

import { planetsColor } from './common/theme';

export const App = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  
  const onClickHandler = () => {
    setIsDisplayed(!isDisplayed);
  }
  
  return(
    <ThemeProvider theme={planetsColor}>
      <Header>
        <Title>THE PLANETS</Title>
        <Navigation 
          display={isDisplayed} 
          click={onClickHandler}
        />
        <Toggle 
          displayed={!isDisplayed} 
          click ={onClickHandler}
        />
      </Header>
      <Main displayed={isDisplayed}>
        <Outlet />
      </Main>
      <GlobalStyles />
    </ThemeProvider>
  )
}