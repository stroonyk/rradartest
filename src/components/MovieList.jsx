import { Card } from "semantic-ui-react";
import MovieCard from "./MovieCard";
import { faker } from "@faker-js/faker";

const MovieList = ({movies}) => {
    return (
      <Card.Group textAlign="center">
       { movies && movies.map(movie => 
          <MovieCard
          movie={movie}
          movieImage={faker.image.cats(250, 250, true)}
          key={movie.id}
        />)}
       </Card.Group>
    );
  }

  export default MovieList;