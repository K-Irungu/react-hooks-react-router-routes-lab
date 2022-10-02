import React from "react";
import { movies } from "../data";



function Movies() {

  const movieDivs = movies.map(movie => {
    const genresList = movie.genres.map(genre => <li key={genre}> {genre} </li>)
    return (
      <div key={ movie.title }>
      Title: { movie.title } <br></br> 
      Time: { movie.time } minutes <br></br>
      Genres: <ul> {genresList} </ul>
      </div>
    )

  })
  return <div>
    {/*{code here}*/}
    <h1> Movies Page </h1>
    { movieDivs }
    </div>;
}

export default Movies;
