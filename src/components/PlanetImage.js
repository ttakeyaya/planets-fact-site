import Earth from '../assets/planet-earth.svg';
import EarthInternal from '../assets/planet-earth-internal.svg';
import EarthGeology from '../assets/geology-earth.png';

import Jupiter from '../assets/planet-jupiter.svg';
import JupiterInternal from '../assets/planet-jupiter-internal.svg';
import JupiterGeology from '../assets/geology-jupiter.png';

import Mars from '../assets/planet-mars.svg';
import MarsInternal from '../assets/planet-mars-internal.svg';
import MarsGeology from '../assets/geology-mars.png';

import Mercury from '../assets/planet-mercury.svg';
import MercuryInternal from '../assets/planet-mercury-internal.svg';
import MercuryGeology from '../assets/geology-mercury.png';

import Neptune from '../assets/planet-neptune.svg';
import NeptuneInternal from '../assets/planet-neptune-internal.svg';
import NeptuneGeology from '../assets/geology-neptune.png';

import Saturn from '../assets/planet-saturn.svg';
import SaturnInternal from '../assets/planet-saturn-internal.svg';
import SaturnGeology from '../assets/geology-saturn.png';

import Uranus from '../assets/planet-uranus.svg';
import UranusInternal from '../assets/planet-uranus-internal.svg';
import UranusGeology from '../assets/geology-uranus.png';

import Venus from '../assets/planet-venus.svg';
import VenusInternal from '../assets/planet-venus-internal.svg';
import VenusGeology from '../assets/geology-venus.png';

// These are styled components.
import { FigureWrapper,GeologyImage } from './Planet.styled';

const Planets = {
  "earth": {
    "overview":Earth,
    "internal":EarthInternal,
    "geology":EarthGeology
  },
  "mercury":{
    "overview":Mercury,
    "internal":MercuryInternal,
    "geology":MercuryGeology
  },
  "venus":{
    "overview":Venus,
    "internal":VenusInternal,
    "geology":VenusGeology
  },
  "mars":{
    "overview":Mars,
    "internal":MarsInternal,
    "geology":MarsGeology
  },
  "jupiter":{
    "overview":Jupiter,
    "internal":JupiterInternal,
    "geology":JupiterGeology,
  },
  "saturn":{
    "overview":Saturn,
    "internal":SaturnInternal,
    "geology":SaturnGeology
  },
  "uranus":{
    "overview":Uranus,
    "internal":UranusInternal,
    "geology":UranusGeology
  },
  "neptune":{
    "overview":Neptune,
    "internal":NeptuneInternal,
    "geology":NeptuneGeology
  }
};

// This component receives the image path from Planet.js and then returns the image component
export const PlanetImage = (props) => {
  let planetPath = props.currentContent.split('/')
  [2];
  let planetName = findPlanetName(planetPath);

  if(planetPath.includes('geology')){
    return (
      <FigureWrapper>
        <img src={Planets[planetName]["overview"]} alt={planetName}/>
        <GeologyImage>
          <img src={Planets[planetName]["geology"]} alt={planetName}/>
        </GeologyImage>
      </FigureWrapper>
    );
  }else if(planetPath.includes('internal')){
    return(
      <FigureWrapper>
        <img src={Planets[planetName]["internal"]} alt={planetName}/>
      </FigureWrapper>
    );
  }else{
    return(
      <FigureWrapper>
        <img src={Planets[planetName]["overview"]} alt={planetName}/>
      </FigureWrapper>
    );
  }
}

function findPlanetName(imagePath){
  const regex  =/((?<=planet-)|(?<=geology-))\w+/g;
  let planetName = imagePath.match(regex)[0];
  return planetName;
}