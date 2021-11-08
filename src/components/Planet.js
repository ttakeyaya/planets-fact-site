import React, {useEffect, useState} from 'react';

export const Planet = (props) =>{
  const {name, rotation, revolution, radius, temperature, overview, structure, geology, images} = props.planetData;
  const {planet :planetImage , internal: internalImage, geology:geologyImage} = images;
  const [content, setContent] = useState(overview);
  const [imageShown, setImageShown] = useState(planetImage);

  useEffect(() => {
    setContent(overview);
    setImageShown(planetImage);
  },[overview, planetImage]);

  const formatImageURL = (url) => {
    return url.replace('.', '..'); 
  }

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
  return(
    <section>
      <figure>
        <img src={formatImageURL(imageShown)} alt="sample"/>
      </figure>
      <h2>
        {name.toUpperCase()}
      </h2>
      <blockquote cite={content.source}>
        <p>{content.content}</p>
        source <cite><a href={content.source}>Wikipedia</a></cite>
      </blockquote>
      <ul>
        <li onClick={onClickHandler}>OVERVIEW</li>
        <li onClick={onClickHandler}>INTERNAL STRUCTURE</li>
        <li onClick={onClickHandler}>SURFACE GEOLOGY</li>
      </ul>
      <dl>
        <dt>ROTATION TIME</dt>
        <dd>{rotation}</dd>
        <dt>REVOLUTION TIME</dt>
        <dd>{revolution}</dd>
        <dt>RADIUS</dt>
        <dd>{radius}</dd>
        <dt>AVERAGE TEMP</dt>
        <dd>{temperature}</dd>
      </dl>
    </section>
  );
}