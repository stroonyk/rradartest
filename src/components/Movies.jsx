import movieData from "../assets/tmdb_5000_movies.json";
import React,{useState,useEffect} from 'react';
import MovieList from "./MovieList";
import DateFilter from "./DateFilter";
import BudgetFilter from "./BudgetFilter";
import NumberMoviesFilter from "./NumberMoviesFilter";
import { Button } from 'semantic-ui-react'

const DEFAULT_NUMBER_OF_FILMS = 200;
/*
* Our Movies Component
*/
const Movies = () => {
  const [startDate, setStartDate] = useState(); 
  const [endDate, setEndDate] = useState();
  const [numberOfMovies, setNumberOfMovies] = useState(DEFAULT_NUMBER_OF_FILMS);
  const [uiNumberOfMovies,setUINumberOfMovies] = useState('');
  const [budgetFrom, setBudgetFrom] = useState('');
  const [budgetTo, setBudgetTo] = useState('');
  const [movies,setMovies] = useState([]);

  /*
  * get the movie date
  */
  useEffect(() => {
    setMovies(movieData.slice(0,DEFAULT_NUMBER_OF_FILMS));
  },[]);

  /*
  * change the number of moves state
  */
  const onNumberMoviesChangeHandler = e => {
    let number = e.currentTarget.value ? e.currentTarget.value : DEFAULT_NUMBER_OF_FILMS;
    setUINumberOfMovies(e.currentTarget.value);
    setNumberOfMovies(number);
  }
  const clearMovies = () => {
    setUINumberOfMovies('');
    setNumberOfMovies(DEFAULT_NUMBER_OF_FILMS);
  }
  /*
  * change the budgetFrom state
  */
  const onBudgetFromChangeHandler = e => {
    setBudgetFrom(e.currentTarget.value);
  }
  const clearBudgetFrom = e => {
    setBudgetFrom('');
  }
  /*
  * change the budgetTo state
  */
  const onBudgetToChangeHandler = e => {
    setBudgetTo(e.currentTarget.value);
  }
  const clearBudgetTo = () => {
    setBudgetTo('');
  }
  /*
  * handle the filter button
  */
  const handleFilterMovies = event => {
    event.preventDefault();
    let filteredMovies = movieData;
    
    // filter based on start date
    if (startDate || endDate){
      let filterEndDate = endDate ? new Date(endDate).getTime() : new Date().getTime();
      let filterStartDate = startDate ? new Date(startDate).getTime() : null ;   
      filteredMovies = movieData.filter(movie => {
        let releaseDate = new Date(movie.release_date).getTime();       
        if (filterEndDate && filterStartDate){
          return (releaseDate >= filterStartDate && releaseDate <= filterEndDate);   
        } else if (filterStartDate){
          return (releaseDate >= filterStartDate);  
        } else if (filterEndDate){
          return (releaseDate <= filterEndDate);  
        } else {  
          return false;
        }                
      })
    } 
    // filter based on end budget
    if (budgetFrom || budgetTo)
    {
      filteredMovies = filteredMovies.filter(movie => {
        let movieBudget = movie.budget / 1000000;
        if (budgetFrom && budgetTo){    
          return (movieBudget >= budgetFrom && movieBudget<= budgetTo); 
        } else if (budgetFrom){
          return (movieBudget >= budgetFrom);
        } else if (budgetTo) {
          return (movieBudget <= budgetTo);
        } else {
          return(false);
        }     
      }); 
    }     
    setMovies(filteredMovies.slice(0,numberOfMovies));
  }   
  return (        
      <div>       
        <div className="filter-row">
          <DateFilter label='Date From' selectedDate={startDate} setSelectedDateHandler={setStartDate}/>
          <DateFilter label='Date To' selectedDate={endDate} setSelectedDateHandler={setEndDate} />
          <NumberMoviesFilter defaultNumberOfMovies={DEFAULT_NUMBER_OF_FILMS} numberOfMovies={uiNumberOfMovies} setNumberOfMoviesHandler={onNumberMoviesChangeHandler} clearNumberMovies={clearMovies}/>
          <BudgetFilter label='Budget From ' budget={budgetFrom} setMovieBudgetHandler={onBudgetFromChangeHandler} clearMovieBudget={clearBudgetFrom} />
          <BudgetFilter label='Budget To ' budget={budgetTo}  setMovieBudgetHandler={onBudgetToChangeHandler} clearMovieBudget={clearBudgetTo} />
          <Button className="filter-button" onClick={handleFilterMovies}>Filter Movies</Button>
        </div>  
        <MovieList movies={movies} /> 
      </div>
    )
}

export default Movies;