import React, { useState } from "react";
import EventTime from "./EventTime";
import "./AddEvent.css"; // Import the CSS file for AddEvent styles

function AddEvent(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredFromTime, setEnteredFromTime] = useState("9");
  const [enteredToTime, setEnteredToTime] = useState("9");
  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    props.onAddEvent(enteredName, enteredFromTime, enteredToTime);
    setEnteredName("");
    setEnteredFromTime("9");
    setEnteredToTime("9");
  };

  const getFromTime = (data) => {
    setEnteredFromTime(data);
  };

  const getToTime = (data) => {
    setEnteredToTime(data);
  };

  const getName = (event) => {
    setEnteredName(event.target.value);
  };

  return (
    <form className="event-form" onSubmit={submitHandler}>
      <div className="event-time">
        <EventTime
          from={enteredFromTime}
          to={enteredToTime}
          fromTime={getFromTime}
          toTime={getToTime}
        />
      </div>
      <div>
        <label className="white-text">Event Name:</label>
        <input type="text" onChange={getName} value={enteredName} />
        {error && <p className="error">Invalid Name</p>}
      </div>
      <div>
        <button type="submit">Add Event</button>
      </div>
    </form>
  );
}

export default AddEvent;
