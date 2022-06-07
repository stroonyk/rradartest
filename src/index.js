import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import { Header, Icon, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Movies from "./components/Movies";
import DetailedMovie from "./components/DetailedMovie"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {useParams} from 'react-router'

/*
* Our Movies component wrapper
*/
const MovieWrapper = () => {
  return (
    <Segment className="outer-div" textAlign="center">
      <Header as="h2" icon textAlign="center">
        <Icon name="film" />
        <Header.Content>Raphas films</Header.Content>
      </Header>
      <Movies />
    </Segment>
  );
}
/*
* This is our detailed movie wrapper
*/
const DetailedMovieWrapper = () => {
  let {id} = useParams();
  return (
    <DetailedMovie id={id} />
  )
}
/*
*   App control now with Routing options
*/
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<MovieWrapper />}></Route>
        <Route  path='/DetailedMovie/:id' element={<DetailedMovieWrapper />}></Route>
      </Routes>
    </div>
  )
}
/*
* Introducing a router for when clicking on the movie card
*/
ReactDOM.render((
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  ),
  (document.querySelector("#root"))
);
