import classes from './GenreNavigation.module.css';
import { NavLink } from 'react-router-dom';


function CountryNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/country/usaId"
              className={({isActive})=>
                isActive ? classes.active : undefined
              }
              end
            >USA</NavLink>
          </li>
          <li>
            <NavLink to="/country/europeId"
              className={({isActive})=>
              isActive ? classes.active : undefined
              }
            >Europe</NavLink>
          </li>
          <li>
            <NavLink to="/country/asiaId"
              className={({isActive})=>
              isActive ? classes.active : undefined
              }
            >Asia</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default CountryNavigation;