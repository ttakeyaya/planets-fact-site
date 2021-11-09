import React from 'react';
import planetsData from "../data.json";
import { Nav, StyledLink, LinkContainer, LinkItem, IconCircle } from './Navigation.styled';
import {ReactComponent as IconChevron} from "../assets/icon-chevron.svg";

export const Navigation = (props) =>{
  const LINKS = planetsData.map(planet => {
    return <LinkItem>      
              <StyledLink 
                to={'/' + planet.name.toLowerCase()}
                key={planet.name}
                onClick={props.click}
              >
                <IconCircle />
                {planet.name.toUpperCase()}
              </StyledLink>
              <IconChevron />
            </LinkItem>;
  });

  return(
    <Nav display={props.display}>
      <LinkContainer>
        {LINKS}
      </LinkContainer>
    </Nav>
  );
}