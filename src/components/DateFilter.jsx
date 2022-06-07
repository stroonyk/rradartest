import { Input,Label } from 'semantic-ui-react';

/*
* Out Date Filter. Does what it says on the tin :)
*/
const DateFilter = (props) => {
    return (
      <div className="ui input date-filter" >
        <Label>{props.label}</Label>
        <Input
          type="date" 
          onChange={(date) => {
            console.log(date.target.value);
            props.setSelectedDateHandler(date.target.value);
          }}   
        />
      </div>
    )
  }
  
  export default DateFilter;