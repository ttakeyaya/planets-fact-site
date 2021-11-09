import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position:absolute;
  top:16%;
  left:0;
  width:100%;
  height:100%;
  display:${props => props.display ? "block":"none"};
`;

export const StyledLink = styled(Link)`
  color:white;
  font-size:1.5rem;
  line-height:2.5rem;
  letter-spacing:0.136rem;
  text-decoration:none;
  display:flex;
  
`;

export const LinkContainer = styled.ul`
  list-style-type:none;
  height:90%;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
`;

export const LinkItem = styled.li`
  border-bottom:1px solid #979797;
  padding-bottom:1rem;
  width:90%;

  display:flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconCircle = styled.div`
  background-color:white;
  width:2rem;
  height:2rem;
  border-radius:50%;
  margin-right:0.8rem;
`;