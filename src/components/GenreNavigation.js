import classes from './GenreNavigation.module.css';
import { NavLink } from 'react-router-dom';


function GenreNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/movie/actionId"
              className={({isActive})=>
                isActive ? classes.active : undefined
              }
              end
            >Action</NavLink>
          </li>
          <li>
            <NavLink to="/movie/comedyId"
              className={({isActive})=>
              isActive ? classes.active : undefined
              }
            >Comedy</NavLink>
          </li>
          <li>
            <NavLink to="/movie/dramaId"
              className={({isActive})=>
              isActive ? classes.active : undefined
              }
            >Drama</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default GenreNavigation;