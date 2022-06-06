import { Input,Icon } from 'semantic-ui-react'

const NumberMoviesFilter = (props) => {
    let placeholderText = props.numberOfMovies ? '' : 'Show 200 Movies';
    return (
      <Input 
        value={props.numberOfMovies}
        type="number"  
        onChange={props.setNumberOfMoviesHandler}       
        placeholder={placeholderText}
        icon={<Icon name="delete" link onClick={props.clearNumberMovies} />} 
      />    
    );
  }

  export default NumberMoviesFilter;