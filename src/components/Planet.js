import React, {useEffect, useState} from 'react';
import { SectionWrapper, FigureWrapper, DefinitionList, ItemWrapper, ContentWrapper,ContentNavigation, ContentItem, ContentTitle, Quote,Content, ItemDefinition, ItemDescription } from './Planet.styled';


export const Planet = (props) =>{
  const {name, rotation, revolution, radius, temperature, overview, structure, geology, images} = props.planetData;
  const {planet :planetImage , internal: internalImage, geology:geologyImage} = images;
  
  const [content, setContent] = useState(overview);
  const [imageShown, setImageShown] = useState(planetImage);

  useEffect(() => {
    setContent(overview);
    setImageShown(planetImage);
  },[overview, planetImage]);

  const onClickHandler =(e) => {
    e.preventDefault();
    let currentContent = e.target.textContent;
    if(currentContent === "OVERVIEW"){
      setContent(overview);
      setImageShown(planetImage);
    }else if(currentContent === "INTERNAL STRUCTURE"){
      setContent(structure);
      setImageShown(internalImage);
    }else{
      setContent(geology);
      setImageShown(geologyImage);
    }
  }

  const formatImageURL = (url) => {
    return url.replace('.', '..'); 
  }
  
  return(
    <SectionWrapper>
      <FigureWrapper>
        <img src={formatImageURL(imageShown)} alt="sample"/>
      </FigureWrapper>
      <ContentWrapper>
        <ContentTitle>
          {name.toUpperCase()}
        </ContentTitle>
        <Quote cite={content.source}>
          <Content>
            {content.content}
          </Content>
          Source <cite><a href={content.source}>Wikipedia</a></cite>
        </Quote>
      </ContentWrapper>
      <ContentNavigation>
        <ContentItem 
          onClick={onClickHandler} 
          name={name}
        >
          OVERVIEW
        </ContentItem>
        <ContentItem 
          onClick={onClickHandler}
          name={name}
        >
          STRUCTURE
        </ContentItem>
        <ContentItem 
          onClick={onClickHandler}
          name={name}
        >
          GEOLOGY
        </ContentItem>
      </ContentNavigation>
      <DefinitionList>
        <ItemWrapper>
          <ItemDefinition>
            ROTATION TIME
          </ItemDefinition>
          <ItemDescription>
            {rotation}
          </ItemDescription>
        </ItemWrapper>
        <ItemWrapper>
          <ItemDefinition>
            REVOLUTION TIME
          </ItemDefinition>
          <ItemDescription>
            {revolution}
          </ItemDescription>
        </ItemWrapper>
        <ItemWrapper>
          <ItemDefinition>
            RADIUS
          </ItemDefinition>
          <ItemDescription>
            {radius}
          </ItemDescription>
        </ItemWrapper>
        <ItemWrapper>
          <ItemDefinition>
            AVERAGE TEMP
          </ItemDefinition>
          <ItemDescription>
            {temperature}
          </ItemDescription>
        </ItemWrapper>
      </DefinitionList>
    </SectionWrapper>
  );
}