import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsDivs = directors.map(director => {
    const listOfMovies = director.movies.map(movie => <li key={movie}> {movie} </li>)
    return (
      <div key={director.name}>
        Name: {director.name}
        <br></br>
        Movies: <ul>
                  {listOfMovies}
                </ul>
      </div>
    )
  })
  return <div>
    {/*{code here}*/}
    <h1> Directors Page </h1>
    {directorsDivs}
    </div>;
}

export default Directors;
