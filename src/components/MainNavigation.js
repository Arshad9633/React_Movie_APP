import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to='/' className={({isActive}) => 
                        isActive ? classes.active : undefined}
                        end
                        >
                         Home
                        </NavLink>
                    </li>
                    <li>
                       <NavLink to='/movie' className={({isActive}) => 
                        isActive ? classes.active : undefined}>
                           Movies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ='/country' className={({isActive}) => 
                        isActive ? classes.active : undefined}
                        >
                         Country
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ='/contact' className={({isActive}) => 
                        isActive ? classes.active : undefined}
                        >
                         Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to ='/blog' className={({isActive}) => 
                        isActive ? classes.active : undefined}
                        >
                         Blog
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default MainNavigation;