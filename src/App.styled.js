import styled from "styled-components";
import { device } from "./common/media";


export const Title = styled.h1`
  font-size:2.8rem;
  font-family:'Antonio',sans-serif;
`;

export const Header = styled.header`
  width:90%;
  padding:1.6rem 0;
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

  &::after{
    position:absolute;
    content:'';
    width:150%;
    height: 1px;
    background-color:#979797;
    top:13%;
    left:0;
    @media ${device.tablet}{
      top:20%;
    }
    @media ${device.laptop}{
      top:0%;
    }
  }
`;

export const Main = styled.main`
  display:${props => !props.display ? "block":"none"};
`;