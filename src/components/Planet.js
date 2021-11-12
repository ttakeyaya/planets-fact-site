import React, {useEffect, useState} from 'react';
import { SectionWrapper, FigureWrapper, DefinitionList, ItemWrapper, ContentWrapper,ContentNavigation, Source, SourceLink, ContentItem, ContentTitle, Quote,Content, ItemDefinition, ItemDescription,GeologyImage } from './Planet.styled';
import {ReactComponent as IconSource} from '../assets/icon-source.svg';

export const Planet = (props) =>{
  const {
    name, 
    rotation, 
    revolution, 
    radius, 
    temperature, 
    overview,
    structure, 
    geology,
    images
  } = props.planetData;

  const {
    planet :planetImage, 
    internal: internalImage, 
    geology:geologyImage
  } = images;
  
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
    }else if(currentContent === "STRUCTURE"){
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

  const Images = (content) => {
    if(content === overview || content === structure){
      return(
        <FigureWrapper>
          <img src={formatImageURL(imageShown)} alt="sample"/>
        </FigureWrapper>
      );
    }else{
      return(
        <FigureWrapper>
          <img src={formatImageURL(planetImage)} alt="planet"/>
          <GeologyImage>
            <img src={formatImageURL(imageShown)} alt="sample"/>
          </GeologyImage>
        </FigureWrapper>
      );
    }
  }
  return(
    <SectionWrapper>
      {Images(content)}


      <ContentWrapper>
        <ContentTitle>
          {name.toUpperCase()}
        </ContentTitle>
        <Quote cite={content.source}>
          <Content>
            {content.content}
          </Content>
          <Source>
          Source <cite><SourceLink href={content.source}>Wikipedia</SourceLink><IconSource/></cite>
          </Source>
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