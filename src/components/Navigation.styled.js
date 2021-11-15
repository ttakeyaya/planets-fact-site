import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../common/media";
import {ReactComponent as IconChevron} from "../assets/icon-chevron.svg";

export const StyledIconChevron = styled(IconChevron)`
  @media ${device.tablet}{
    display:none;
  }
`;
export const Nav = styled.nav`
  position:absolute;
  top:15%;
  left:0;
  width:100%;
  height:100%;
  display:${props => props.displayed ? "block":"none"};
  @media ${device.tablet}{
    position:relative;
    display:flex;
    height:auto;
  }
  @media ${device.laptop}{
    width:66.5rem;
  }
`;

export const StyledLink = styled(Link)`
  color:white;
  font-size:1.5rem;
  line-height:2.5rem;
  letter-spacing:0.136rem;
  font-family:'Spartan',sans-serif;
  font-weight:700;
  text-decoration:none;
  display:flex;
  
  @media ${device.tablet}{
    font-size:1.1rem;
  }
  @media ${device.laptop}{
    padding-top:0.8rem
  }
  &:hover{
    @media ${device.laptop}{
      border-top:2px solid ${props =>props.theme[props.planetname] };
    }
  }
`;

export const LinkContainer = styled.ul`
  list-style-type:none;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  height:100%;
  @media ${device.tablet}{
    flex-direction: row;
    justify-content: space-between;
    width:100%;
  }
  @media ${device.laptop}{
    margin-right:2%;
  }
`;

export const LinkItem = styled.li`
  border-bottom:1px solid #979797;
  padding-bottom:2rem;
  width:95%;

  display:flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet}{
    border:none;
    width:auto;
    padding:0rem;
  }
`;

export const IconCircle = styled.div`
  background-color:${props => 
    props.theme[props.planetname+'Circle']
  };
  width:2rem;
  height:2rem;
  border-radius:50%;
  margin-right:2.5rem;

  @media ${device.tablet}{
    display:none;
  }
`;