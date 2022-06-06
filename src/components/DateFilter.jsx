import { Input,Label } from 'semantic-ui-react';

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