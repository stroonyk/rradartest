import { Icon, Button, Card, Image } from "semantic-ui-react";
import React from "react";


class MovieCard extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        liked : false,
        disliked :false
      }
    }    
    handleLiked (){
      this.setState ({liked : !this.state.liked});  
      this.setState({disliked : false})
    }
    handleDisliked (){
      this.setState({disliked : !this.state.disliked});  
      this.setState({liked : false})
    }    
    render(){
      let likedClass = this.state.liked ? 'ui green button' : 'ui basic green button';
      let dislikedClass = this.state.disliked ? 'ui red button' : 'ui red basic button';
      return (
        <Card className="centered">
          <Card.Content>
            <Image floated="right" size="tiny" src={this.props.img} />
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta> {this.props.tagline}</Card.Meta>
            <Card.Description>Release Date : <strong>{this.props.release_date}</strong></Card.Description>
            <Card.Description>Budget : <strong>{this.props.budget}</strong>M</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              
            <Button className={likedClass} onClick={() => this.handleLiked()} >
                <Icon name="thumbs up" />
                Like
              </Button>
              <Button className={dislikedClass} onClick={() => this.handleDisliked()}>
                Dislike
                <Icon name="thumbs down" />
              </Button>
            </div>
          </Card.Content>
        </Card>
      );
    }
  }

  export default MovieCard