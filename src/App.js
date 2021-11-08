import { Outlet, Link } from "react-router-dom"
import planetsData from "./data.json";

export const App = () => {

  const LINKS = planetsData.map(planet => {
    return <Link 
              to={'/' + planet.name.toLowerCase()}
              key={planet.name}  
            >
              {planet.name.toUpperCase()}
            </Link>;
  });
  
  return(
    <div>
      <nav>
        {LINKS}
      </nav>
      <Outlet />
    </div>
  )
}