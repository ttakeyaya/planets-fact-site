import React from 'react';
import planetsData from "../data.json";
import { Nav, StyledLink, LinkContainer, LinkItem, IconCircle, StyledIconChevron } from './Navigation.styled';

export const Navigation = (props) =>{
  const LINKS = planetsData.map(planet => {
    return <LinkItem key={planet.name}>      
              <StyledLink 
                to={'/' + planet.name.toLowerCase()}
                
                onClick={props.click}
                planetname={planet.name.toLowerCase()}
              >
                <IconCircle planetname={planet.name.toLowerCase()}/>
                {planet.name.toUpperCase()}
              </StyledLink>
              <StyledIconChevron />
            </LinkItem>;
  });

  return(
    <Nav displayed={props.display}>
      <LinkContainer>
        {LINKS}
      </LinkContainer>
    </Nav>
  );
}