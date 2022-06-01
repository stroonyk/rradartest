import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import { Header, Icon, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Movies from "./movies";



const App = () => {

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

ReactDOM.render(    
  <App/>, 
  (document.querySelector("#root"))
);
