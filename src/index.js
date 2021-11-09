import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { App } from './App';
import { Planet } from './components/Planet';
import planetsData from "./data.json";

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