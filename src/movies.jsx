import { Card } from "semantic-ui-react";
import movieData from "./tmdb_1_movies.json";
import { faker } from "@faker-js/faker";
import MovieCard from "./moviecard";
import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Movies = () => {
  const StartDatePicker = () => {
    const [startDate, setStartDate] = useState();
    return (
      <DatePicker
        dateFormat={"yyyy-MM-dd"}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showYearDropdown
        dateFormatCalendar="yyyy-MM-dd"
        yearDropdownItemNumber={15}
        scrollableYearDropdown
      />
    );
  };
  const EndDatePicker = () => {
    const [endDate, setEndDate] = useState();
    return (
      <DatePicker 
        dateFormat={"yyyy-MM-dd"}
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        showYearDropdown
        dateFormatCalendar="yyyy-MM-dd"
        yearDropdownItemNumber={15}
        scrollableYearDropdown
      />
    );
  };  
   const getMovies = () => {      
      let data = movieData.map((data, key) => {
        return(<MovieCard
          img={faker.image.cats(250, 250, true)}
          title={data.title}
          tagline={data.tagline}
          release_date={data.release_date}
          vote_average={data.vote_average}
          keywords={data.keywords[0]}
          onClick={() => this.handleClick()}
        />);        
        }             
      )  
      return data;  
    }
    let movies = getMovies();  
    return (        

        <div>       
          <div>
            <StartDatePicker />
          </div>   
          <Card.Group textAlign="center">
            {movies}
          </Card.Group>
        </div>
      )
  
}

export default Movies;