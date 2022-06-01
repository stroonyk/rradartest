import { Card } from "semantic-ui-react";
import movieData from "./tmdb_5000_movies.json";
import { faker } from "@faker-js/faker";
import MovieCard from "./moviecard";
import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const Movies = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [nFilms, setFilms] = useState(200);
  const [budgetFrom, setBudgetFrom] = useState('');
  const [budgetTo, setBudgeTo] = useState('');
  let numberFilms = 200;

  const FilterMoviesButton = (props) => (
    <Button onClick={props.onclick}>Filter Movies</Button>
  )
  const InputFilmBudgetFrom = (props) => (
    <Input placeholder='Budget From (Million)' onChange={props.onchange}  onKeyPress={(event) => props.onkeypress(event)} />
  )
  const InputFilmBudgetTo = (props) => (
    <Input placeholder='Budget To (Million)' onKeyPress={(event) => props.onkeypress(event)}  />
  )

  const InputNumberFilms = (props) => (
    <Input 
      onKeyPress={(event) => props.onkeypress(event)}    
      action={{icon:'play',onClick: e => setFilms(numberFilms)}}       
      onChange={e => numberFilms = e.target.value}       
      placeholder={props.placeholder}
    />    
  )
  
  const restrictToDigits = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }  
  }
  const StartDatePicker = () => {    
    return (
      <div>Filter from 
        <DatePicker
          dateFormat={"yyyy-MM-dd"}
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}          
          showYearDropdown
          dateFormatCalendar="yyyy-MM-dd"
          yearDropdownItemNumber={15}
          scrollableYearDropdown
        />
      </div>
    );
  };
  const EndDatePicker = () => {  
    return (
      <div>Filter to
      <DatePicker 
        dateFormat={"yyyy-MM-dd"}
        selected={endDate}
        onChange={(date) => {
          setEndDate(date);
        }}
        showYearDropdown
        dateFormatCalendar="yyyy-MM-dd"
        yearDropdownItemNumber={15}
        scrollableYearDropdown
      />
      </div>
    );
  };  
   const getMovies = () => {    
      let newdata = movieData;
      if (startDate){
        let eDate = endDate ? endDate : new Date();
        newdata = movieData.filter(item => {
          let releaseDate = new Date(item.release_date);
          let sDate = new Date(startDate);        
          return (releaseDate >= sDate && releaseDate <= eDate);                    
        });
      }          
      
      let movies = newdata.map((data, key) => {                
        return(<MovieCard
          img={faker.image.cats(250, 250, true)}
          title={data.title}
          tagline={data.tagline}
          release_date={data.release_date}
          vote_average={data.vote_average}
          budget={parseFloat(data.budget / 1000000).toFixed(0)}
          keywords={data.keywords[0]}
          onClick={() => this.handleClick()}
        />);        
        }  
                 
      )  

      return movies.slice(0,nFilms);  
    }
    const handleChange = event => {
      setBudgetFrom(event.target.value);
    }
    const handleClick = event => {
      event.preventDefault();
      console.log('handleclick' + budgetFrom  + 'help' )
    }    
    
    let placeholderText = nFilms ? 'Show ' + nFilms + ' Films' : 'Number Of Films';
    let movies = getMovies();  
    return (        
        <div>       
          <div>
            <StartDatePicker />
            <EndDatePicker />
            <InputNumberFilms placeholder={placeholderText} onkeypress={restrictToDigits}/>
            <InputFilmBudgetFrom onkeypress={restrictToDigits} onchange={handleChange} />
            <InputFilmBudgetTo onkeypress={restrictToDigits} />
            <FilterMoviesButton onclick={handleClick}/>
          </div>   
          <Card.Group textAlign="center">
            {movies}
          </Card.Group>
        </div>
      )
  
}

export default Movies;