import React from 'react';
import {ReactComponent as HamburgerIcon} from "../assets/icon-hamburger.svg";

export const Toggle = (props) =>{

  
  return(
    <div onClick={props.click}>
      {!props.isDisplayed ? <HamburgerIcon /> : ""}
    </div>
    
  )
}