
import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const StartDatePicker = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => props.onChange(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    );
  };

  const EndDatePicker = (props) => {
    return (
      <DatePicker
        selected={endDate}
        onChange={(date) => props.onChange(date)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    );
  };

  class RangePicker extends React.Component{
    render(){            
        return (
            <div>
              <StartDatePicker onChange={this.props.onStartChange()}/> 
              <EndDatePicker onChange={this.props.onEndChange()}/>
          </div>
        )
    }      
  }

  export default RangePicker;