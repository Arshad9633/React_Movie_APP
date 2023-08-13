import React from 'react';
import { MOVIE } from './MovieList';
import classes from './Country.module.css';

function CountryAsiaPage() {
  const countryFilter = 'ASIA';
  const asiaMovies = MOVIE.filter(movie => movie.country === countryFilter);
  if(asiaMovies.length === 0){
    return <p>No ASIA movies found.</p>;
  };
  return (
    <>
     <h1>ASIA Movies</h1>
      <div className={classes.container}>
          {asiaMovies.map(movie => (
            <div className={classes.card}>
              <div key={movie.id}>
                <div className={classes['card-header']}>
                  <img src={movie.img} alt={movie.title} />
                </div>
                <div className={classes['card-content']}>
                    <h3 className={classes.title}>{movie.title}</h3>
                    <p className={classes['card-title']}>{movie.genre}</p>
                    <p className={classes['card-description']}>{movie.country}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}




export default CountryAsiaPage;

