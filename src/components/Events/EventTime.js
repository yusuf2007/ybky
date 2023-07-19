import React from "react";
import "./EventTime.css";

function EventTime(props) {
  const fromTimeSubmit = (event) => {
    props.fromTime(event.target.value);
  };

  const toTimeSubmit = (event) => {
    props.toTime(event.target.value);
  };

  const generateFromOptions = () => {
    const toTimeValue = parseInt(props.to, 10);
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
        // timeValue >= toTimeValue || // this doesnt work
        isTimeRangeOverlapping(toTimeValue, timeValue); // second condition

      return (
        <option key={time} value={time} disabled={isDisabled}>
          {time}:00
        </option>
      );
    });
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
        timeValue <= fromTimeValue || // first condition
        isTimeRangeOverlapping(fromTimeValue, timeValue); // second condition
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
        <select onChange={fromTimeSubmit} value={props.from}>
          {generateFromOptions()}
        </select>
      </div>
      <div className="event-time-select">
        <span className="white-text">To</span>
        <select onChange={toTimeSubmit} value={props.to}>
          {generateToOptions()}
        </select>
      </div>
    </React.Fragment>
  );
}

export default EventTime;
