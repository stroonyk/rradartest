import { Icon, Button, Card, Image } from "semantic-ui-react";
import React,{useState} from "react";
/*
* Our MovieCard component. 
*/
const MovieCard = ({movie,movieImage,movieId}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  /*
  * handle the liked and disliked buttons being clicked using state
  */
  const handleLiked = () => {
      setLiked((currentState) => !currentState);  
      setDisliked(false);
  }
  const handleDisliked = () => {
      setDisliked((currentState) => !currentState);  
      setLiked(false);
  }   
  /*
  * clicking on the movie will link to the DetailedMovie component using the id
  */
  return (
      <Card className="centered">
        <Card.Content href={`DetailedMovie/${movieId}`}>
          <Image floated="right" size="tiny" src={movieImage} />
            <Card.Header>{movie.title}</Card.Header>
            <Card.Meta> {movie.tagline}</Card.Meta>
          <Card.Description>Release Date : <strong>{movie.release_date}</strong></Card.Description>
          <Card.Description>Budget : <strong>{parseFloat(movie.budget / 1000000).toFixed(0)}</strong>M</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button className={`ui green button ${liked ? '' : 'basic'}`} onClick={handleLiked} >
                <Icon name="thumbs up" />
                Like
            </Button>
            <Button className={`ui red button ${disliked ? '' : 'basic'}`} onClick={handleDisliked} > 
              Dislike
              <Icon name="thumbs down" />
            </Button>
          </div>
        </Card.Content>
      </Card>
  );
}

export default MovieCard;