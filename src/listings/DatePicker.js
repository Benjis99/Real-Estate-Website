import React, { useState } from "react";
import "./DatePicker.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function DatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="datePicker">
      <h2 className="calendarTitle">Book Listing</h2>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <button className="bookListing">Book Date</button>
    </div>
   
  );
}

export default DatePicker;
