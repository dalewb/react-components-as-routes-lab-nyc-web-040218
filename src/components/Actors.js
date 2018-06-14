import React from 'react';
import { actors } from '../data';

const allActors = actors.map(actor => {
  return (
    <div>
      <h3>Name: {actor.name}</h3>
      <ul>
        {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {allActors}
    </div>
  );
};

export default Actors;
