import styled from "styled-components";
import { device } from "../common/media";


export const SectionWrapper = styled.section`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width:100vw;
  margin:0 auto;
  @media ${device.tablet}{
    flex-wrap:wrap;
    flex-direction:row;
  }
  @media ${device.laptop}{
    width:90%;
    max-width:1200px;
    margin:0 auto;
    justify-content: space-around;
    display:grid;
    grid-template-areas: 
      "Picture Description"
      "Picture Navigation"
      "Fact Fact"
    ;
    grid-template-columns: repeat(2,45%);
  }
`;

export const FigureWrapper = styled.figure`
  position:relative;
  margin:9.5rem 0 9.8rem 0;
  width:11.1rem;
  height:11.1rem;
  @media ${device.tablet}{
    flex-basis:100%;
    text-align:center;
  }
  @media ${device.laptop}{
    gird-area:Picture;
    width:100%;
  }
  & > img{
    height:100%;
    width:100%;
    @media ${device.tablet}{
      width:18.4rem;
      height:18.4rem;
    }
  }
`;
export const GeologyImage = styled.div`
  position:absolute;
  left:20%;
  top:80%;
  width:8rem;
  height:auto;
  @media ${device.tablet}{
    left:45%;
    top:130%;
  }
  @media ${device.laptop}{
    left:40%;
    top:150%;
  }
  &>img{
    width:100%;
  }
  
`;
export const ContentWrapper = styled.div`
  text-align:center;
  width:90%;
  @media ${device.tablet}{
    width:50%;
  }
  @media ${device.laptop}{
    grid-area:Description;
    width:350px;
  }
`;

export const ContentTitle = styled.h2`
  font-size:4rem;
  font-family:'Antonio',sans-serif;
  @media ${device.tablet}{
    font-size:4.8rem;
    text-align:left;
  }
`;
export const Source = styled.div`
  opacity: 0.8;
  @media ${device.tablet}{
    text-align:left;
    display:flex;
    align-items: center;
  }
`;

export const SourceLink = styled.a`
  color:white;
  font-size:1.2rem;
  padding:0 0.5rem;
  font-family: 'Spartan', sans-serif;
  font-style: normal;
  font-weight:700;
`;

export const Quote=styled.blockquote`
  width:95%;
  padding:0;
  margin:0;
`;

export const Content=styled.p`
  padding:1.6rem 0 3.2rem 0;
  font-size:1.1rem;
  font-family:'Spartan', sans-serif;
  line-height:2.2rem;
  @media ${device.tablet}{
    text-align:left;
  }
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
  @media ${device.tablet}{
    width:40%;
    order:0;
    flex-direction: column;
    padding:0;
    justify-content: space-around;
    align-self: center;
    height:15rem;
    margin-top:5%;
  }
  @media ${device.laptop}{
    grid-area:Navigation;
    min-width:350px;
    width:100%;
  }
  &::after{
    position:absolute;
    content:'';
    top:100%;
    left:-25%;
    width:150%;
    height:1px;
    background-color:#979797;
    @media ${device.tablet}{
      display:none;
    }
  }
`;

export const ContentItem = styled.li`
  cursor:pointer;
  font-size:0.9rem;
  font-weight:700;
  @media ${device.tablet}{
    border:1px solid #FFFFFF;
    width:85%;
    padding:.8rem 0 .8rem 0rem;
    background-color:${props => props.active ?props.theme[props.name.toLowerCase()] :""};
  }
  @media ${device.laptop}{
    width:100%;
  }
  &:hover{
    position:relative;
    background-color:#38384F;
    &::after{
      position:absolute;
      z-index:5;
      content:'';
      top:265%;
      left:0;
      width:100%;
      height:4px;
      background-color:${props => props.theme[props.name.toLowerCase()]};
      @media ${device.tablet}{
        display:none;
      }
    }
  }
`;

export const ContentIndex = styled.span`
    display:none;
  @media ${device.tablet}{
    display:inline-block;
    padding:0 1.7rem 0rem 2rem;
    font-size:.9rem;
    font-weight:400;
  }

`;

export const DefinitionList = styled.dl`
  width:90%;
  padding-top:2.8rem;
  @media ${device.tablet}{
    display:flex;
  }
  @media ${device.laptop}{
    grid-area:Fact;
    width:100%;
    justify-content: space-between;
  }
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
  @media ${device.tablet}{
    height:8.8rem;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-bottom:3.6rem;
    margin-right:1.1rem;
  }
  @media ${device.laptop}{
    margin-right:0;
    max-width:22rem;
  }
`;

export const ItemDefinition = styled.dt`
  font-size:0.8rem;
  font-family:'Spartan',sans-serif;
`;
export const ItemDescription = styled.dd`
  font-size:2rem ;
  font-family:'Antonio',sans-serif;
  @media ${device.tablet}{
    margin:0;
    font-size:2.4rem;
  }
`;