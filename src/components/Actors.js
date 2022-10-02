import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsDivs = actors.map(actor => {
    const listOfMovies = actor.movies.map(movie => <li key={movie}> {movie} </li>)
    return (
      <div key={actor.name}>
        Name: {actor.name} <br></br>
        Movies: {listOfMovies}
        <br></br>
      </div>
    )

  })


  return (
  <div>
    {/*{code here}*/}
    <h1> Actors Page </h1>
    {actorsDivs}


  </div>
  );
}

export default Actors;
