import React from 'react';
import { MOVIE } from './MovieList';
import classes from './Country.module.css';

function CountryEuropePage() {
  const countryFilter = 'EUROPE';
  const europeMovies = MOVIE.filter(movie => movie.country === countryFilter);
  if(europeMovies.length === 0){
    return <p>No EUROPE movies found.</p>;
  };
  return (
    <>
     <h1>EUROPE Movies</h1>
      <div className={classes.container}>
          {europeMovies.map(movie => (
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




export default CountryEuropePage;

