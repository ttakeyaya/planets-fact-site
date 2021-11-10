import styled from "styled-components";

export const SectionWrapper = styled.section`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width:100vw;
  margin:0 auto;
`;

export const FigureWrapper = styled.figure`
  position:relative;
  margin:9.5rem 0 9.8rem 0;
  width:11.1rem;
  height:11.1rem;
  & > img{
    height:100%;
    width:100%;
  }
`;
export const GeologyImage = styled.div`
  position:absolute;
  left:20%;
  top:80%;
  width:8rem;
  height:auto;
  &>img{
    width:100%;
  }
  
`;
export const ContentWrapper = styled.div`
  text-align:center;
  width:90%;
`;

export const ContentTitle = styled.h2`
  font-size:4rem;
  font-family:'Antonio',sans-serif;
`;

export const Quote=styled.blockquote`
  width:100%;
  padding:0;
  margin:0;
`;

export const Content=styled.p`
  padding:1.6rem 0 3.2rem 0;
  font-size:1.1rem;
  font-family:'Spartan', sans-serif;
  line-height:2.2rem;
`;

export const ContentNavigation = styled.ul`
  padding:2rem 0;
  order:-1;
  list-style-type:none;
  width:90%;
  display:flex;
  justify-content: space-between;
  align-items:center;
  position:relative;
  &::after{
    position:absolute;
    content:'';
    top:100%;
    left:-25%;
    width:150%;
    height:1px;
    background-color:#979797;
  }
`;

export const ContentItem = styled.li`
  cursor:pointer;
  font-size:0.9rem;
  
  &:hover{
    position:relative;
    &::after{
      position:absolute;
      z-index:5;
      content:'';
      top:265%;
      left:0;
      width:100%;
      height:4px;
      background-color:${props => props.theme[props.name.toLowerCase()]};
    }
  }
`;
export const DefinitionList = styled.dl`
  width:90%;
  padding-top:2.8rem;
`;

export const ItemWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  height:4.1rem;
  margin-bottom:0.8rem;
  padding:0 2%;
  border:1px solid #D8D8D8;
  width:100%;
`;

export const ItemDefinition = styled.dt`
  font-size:0.8rem;
  font-family:'Spartan',sans-serif;
`;
export const ItemDescription = styled.dd`
  font-size:2rem ;
  font-family:'Antonio',sans-serif;
`;