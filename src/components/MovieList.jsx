import { Card } from "semantic-ui-react";
import MovieCard from "./MovieCard";
import { faker } from "@faker-js/faker";

/*
* Our MoviesList component. Just a wrapper for mapping the movies to the MovieCard
*/
const MovieList = ({movies}) => {
    return (
      <Card.Group textAlign="center">
       { movies && movies.map(movie => 
          <MovieCard
          movie={movie}
          movieImage={faker.image.cats(250, 250, true)}
          movieId={movie.id}
          key={movie.id}
        />)}
       </Card.Group>
    );
  }

  export default MovieList;