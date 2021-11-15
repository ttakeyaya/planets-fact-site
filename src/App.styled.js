import styled from "styled-components";
import { device } from "./common/media";


export const Title = styled.h1`
  font-size:2.8rem;
  font-family:'Antonio',sans-serif;
`;

export const Header = styled.header`
  width:100%;
  padding:1.6rem 6%;
  margin:0 auto;
  display:flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.tablet}{
    flex-direction: column;
    width:100%;
  }
  @media ${device.laptop}{
    flex-direction: row;
    width:90%;
    max-width:1200px;
    justify-content: space-between;
    align-items: center;
    border-bottom:1px solid white;
  }
  border-bottom:1px solid white;
`;

export const Main = styled.main`
  display:${props => !props.displayed ? "block":"none"};
  @media ${device.tablet}{
    display:block;
  }
`;