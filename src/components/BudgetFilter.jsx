import { Input,Icon } from 'semantic-ui-react';

const BudgetFilter = (props) => {
    let placeholderText = props.budget ? props.label + ' ' + props.budget + 'M' : props.label + '(Millions)';
    return (
      <Input 
        type="number" 
        value={props.budget} 
        placeholder={placeholderText} 
        onChange={props.setMovieBudgetHandler} 
        icon={<Icon name="delete" link onClick={props.clearMovieBudget} />} 
      />
    )
  }

  export default BudgetFilter;