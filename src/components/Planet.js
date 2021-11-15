import React, {useEffect, useState} from 'react';
import { 
  SectionWrapper,
  FigureWrapper,
  DefinitionList,
  ItemWrapper,
  ContentWrapper,
  ContentNavigation,
  Source,
  SourceLink,
  ContentItem,
  ContentIndex,
  ContentTitle,
  Quote,Content,
  ItemDefinition,
  ItemDescription,
  GeologyImage
} from './Planet.styled';
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
  const [isOverviewActive, setIsOverviewActive] = useState(false);
  const [isStructureActive, setIsStructureActive] = useState(false);
  const [isGeologyActive, setIsGeologyActive] = useState(false);

  useEffect(() => {
    setContent(overview);
    setImageShown(planetImage);
  },[overview, planetImage]);

  const onClickHandler =(e) => {
    e.preventDefault();
    let currentContent = e.target.textContent;
    console.log(currentContent);
    if(currentContent === "01OVERVIEW"){
      setContent(overview);
      setImageShown(planetImage);
      setIsOverviewActive(true);
      setIsStructureActive(false);
      setIsGeologyActive(false);
    }else if(currentContent === "02STRUCTURE"){
      setContent(structure);
      setImageShown(internalImage);
      setIsOverviewActive(false);
      setIsStructureActive(true);
      setIsGeologyActive(false);
    }else{
      setContent(geology);
      setImageShown(geologyImage);
      setIsOverviewActive(false);
      setIsStructureActive(false);
      setIsGeologyActive(true);
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
          active={isOverviewActive}
        >
          <ContentIndex>01</ContentIndex>
          OVERVIEW
        </ContentItem>
        <ContentItem 
          onClick={onClickHandler}
          name={name}
          active={isStructureActive}
        >
          <ContentIndex>02</ContentIndex>
          STRUCTURE
        </ContentItem>
        <ContentItem 
          onClick={onClickHandler}
          name={name}
          active={isGeologyActive}
        >
          <ContentIndex>03</ContentIndex>
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