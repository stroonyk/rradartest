import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import movieData from "./tmdb_5000_movies.json";
import { Header, Icon, Segment, Button, Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { faker } from "@faker-js/faker";

function App() {
  return (
    <Segment textAlign="center">
      <Header as="h2" icon textAlign="center">
        <Icon name="film" />
        <Header.Content>Several films</Header.Content>
      </Header>
      <Movies />
    </Segment>
  );
}

function Movies() {
  let i = 0;
  return (
    <>
      <Card.Group textAlign="center">
        {movieData.map((data, key) => {
          if (i < 200) {
            i++;
            return (
              <MovieCard
                img={faker.image.cats(250, 250, true)}
                title={data.title}
                tagline={data.tagline}
                release_date={data.release_date}
                vote_average={data.vote_average}
                keywords={data.keywords[0]}
              />
            );
          }
          return null;
        })}
      </Card.Group>
    </>
  );
}

function MovieCard(props) {
  return (
    <Card className="centered">
      <Card.Content>
        <Image floated="right" size="tiny" src={props.img} />
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta> {props.tagline}</Card.Meta>
        <Card.Description>{props.release_date}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            <Icon name="thumbs up" />
            Like
          </Button>
          <Button basic color="red">
            Dislike
            <Icon name="thumbs down" />
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

ReactDOM.render(<App />, (document.querySelector("#root")));
