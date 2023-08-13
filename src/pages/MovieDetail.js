import { NavLink, useParams } from 'react-router-dom';
import {MOVIE} from './MovieList';
import classes from './MovieDetail.module.css';

function MovieDetailPage({movies}) {
  const { movieId }= useParams ();
 
  const movie = MOVIE.find((movie) => movie.id === movieId);
  if(!movie){
    return <p>Movie not Found</p>;
  }
 
  return(
    <>
    <ul className={classes.list}>
     <NavLink to='/movie'  className={({isActive})=>
                isActive ? classes.active : undefined
              }>Back</NavLink>
    </ul>
     <h1 className={classes['card-title']}>{movie.title}</h1>
      <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes['card-header']}>
         <img src={movie.img} alt={movie.title} />
        </div>
        <div className={classes['card-content']}>
          <p className={classes['card-description']}>{movie.genre}</p>
          <p className={classes['card-description']}>{movie.country}</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default MovieDetailPage;
