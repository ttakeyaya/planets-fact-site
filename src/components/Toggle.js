import React from 'react';
import {ReactComponent as HamburgerIcon} from "../assets/icon-hamburger.svg";
import { HamburgerIconContainer } from './Toggle.styled';

export const Toggle = (props) =>{

  
  return(
    <HamburgerIconContainer onClick={props.click}>
      {!props.displayed? <HamburgerIcon /> : ""}
    </HamburgerIconContainer>
    
  )
}