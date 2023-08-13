import { Link } from 'react-router-dom';
import classes from './Movie.module.css';
import { MOVIE } from './MovieList';



function MoviePage() {
  return (
    <>
    <h1>MoviePage</h1>    
      <div className={classes.container}>   
         {MOVIE.map((gen) => (
            <div className={classes.card}>
              <div key={gen.id}>
                <div className={classes['card-header']}>
                  <img src={gen.img} alt={gen.title} />
                </div>
                <div className={classes['card-content']}>
                  <Link to = {`/movie/${gen.id}`}>
                     <h3 >{gen.title}</h3>
                  </Link>
                 <p className={classes['card-description']}>{gen.genre}</p>
                 <p className={classes['card-description']}>{gen.country}</p>
                </div>
              </div>
            </div>             
         ))}
      </div>
    </>
  );
};

export default MoviePage;

