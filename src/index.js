import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import planetsData from "./data.json";
import { Planet } from './components/Planet';

const RouteLists = planetsData.map(planet => {
  return <Route 
            path={planet.name.toLowerCase()}
            element={<Planet planetData={planet}/>}
            key={planet.name}   
          /> 
});

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        {RouteLists}
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);