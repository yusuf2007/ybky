import React from "react";
import "./EventTime.css";

function EventTime(props) {
  const fromTimeSubmit = (event) => {
    props.fromTime(event.target.value);
  };

  const toTimeSubmit = (event) => {
    props.toTime(event.target.value);
  };

  const generateToOptions = () => {
    const fromTimeValue = parseInt(props.from, 10);
    const timeOptions = [
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
    ];

    return timeOptions.map((time) => {
      const timeValue = parseInt(time, 10);
      const isDisabled =
        timeValue <= fromTimeValue ||
        isTimeRangeOverlapping(fromTimeValue, timeValue);
      return (
        <option key={time} value={time} disabled={isDisabled}>
          {time}:00
        </option>
      );
    });
  };

  const isTimeRangeOverlapping = (fromTimeValue, toTimeValue) => {
    const { events } = props;
    for (const event of events) {
      const eventFromTime = parseInt(event.from, 10);
      const eventToTime = parseInt(event.to, 10);
      if (
        (fromTimeValue >= eventFromTime && fromTimeValue < eventToTime) ||
        (toTimeValue > eventFromTime && toTimeValue <= eventToTime)
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <React.Fragment>
      <div className="event-time-select">
        <span className="white-text">From</span>
        <select onChange={fromTimeSubmit} name="from_time" value={props.from}>
          <option value="9">9:00</option>
          <option value="10">10:00</option>
          <option value="11">11:00</option>
          <option value="12">12:00</option>
          <option value="13">13:00</option>
          <option value="14">14:00</option>
          <option value="15">15:00</option>
          <option value="16">16:00</option>
          <option value="17">17:00</option>
          <option value="18">18:00</option>
          <option value="19">19:00</option>
          <option value="20">20:00</option>
        </select>
      </div>
      <div className="event-time-select">
        <span className="white-text">To</span>
        <select onChange={toTimeSubmit} name="to_time" value={props.to}>
          {generateToOptions()}
        </select>
      </div>
    </React.Fragment>
  );
}

export default EventTime;
