import React from 'react';
import { MOVIE } from './MovieList';
import classes from './Genre.module.css';

function GenreActionPage() {
  const genreFilter = 'Action';
  const actionMovies = MOVIE.filter(movie => movie.genre === genreFilter);
  if(actionMovies.length === 0){
    return <p>No action movies found.</p>;
  };
  return (
    <>
     <h1>Action Movies</h1>
      <div className={classes.container}>
          {actionMovies.map(movie => (
            <div className={classes.card}>
              <div key={movie.id}>
                <div className={classes['card-header']}>
                  <img src={movie.img} alt={movie.title} />
                </div>
                <div className={classes['card-content']}>
                    <h3 className={classes.title}>{movie.title}</h3>
                    <p className={classes['card-description']}>{movie.genre}</p>
                    <p className={classes['card-description']}>{movie.country}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}




export default GenreActionPage;

