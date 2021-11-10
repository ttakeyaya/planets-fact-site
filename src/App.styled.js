import styled from "styled-components";

export const Page = styled.div`
  width:100vw;
`;

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
  &::after{
    position:absolute;
    content:'';
    width:150%;
    height: 1px;
    background-color:#979797;
    top:13%;
    left:0;
  }
`;

export const Main = styled.main`
  display:${props => !props.display ? "block":"none"};

`;