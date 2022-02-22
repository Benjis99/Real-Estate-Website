import React, {useState} from 'react';
import './DatePicker.css';



function DatePicker() {
const [startDate, setStartDate] = useState (new Date());
const [endDate, setEndDate] = useState(new Date());

const selectionRange = {
  startDate: startDate,
  endDate: endDate,
  key: "selection",
}

function handleSelect(ranges){
  setStartDate(ranges.selection.startDate);
  setEndDate(ranges.selection.endDate);
}

  return (
    <div className='datePicker'>
        <DatePicker ranges={
          [selectionRange]} onChange = {
            handleSelect
          }/>
      
        </div>
  )
}

export default DatePicker;