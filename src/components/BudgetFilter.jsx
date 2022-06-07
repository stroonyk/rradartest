import { Input,Icon } from 'semantic-ui-react';

/*
* Out Budget Filter. Does what it says on the tin :) Changing a value saves to the Movies state. Clear the value with the clear icon
*/
const BudgetFilter = (props) => {
    let placeholderText = props.budget ? '' : `${props.label} (Millions)`;
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