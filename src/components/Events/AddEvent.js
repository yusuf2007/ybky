import React, { useState } from "react";
import EventTime from "./EventTime";
import "./AddEvent.css"; // Import the CSS file for AddEvent styles
import ErrorModal from "../UI/ErrorModal.js"; // ignore

function AddEvent(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredFromTime, setEnteredFromTime] = useState("9");
  const [enteredToTime, setEnteredToTime] = useState("10");
  const [error, setError] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setError({
        title: "Error",
        message: "Inavlid Name",
      });
      return;
    }
    if (enteredFromTime >= enteredToTime) {
      setError({
        title: "Error",
        message: "Inavlid Time",
      });
      return;
    }

    setError(false);
    props.onAddEvent(enteredName, enteredFromTime, enteredToTime);
    setEnteredName("");
    setEnteredFromTime("9");
    setEnteredToTime("10");
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <form className="event-form" onSubmit={submitHandler}>
      <div className="event-time">
        <EventTime
          from={enteredFromTime}
          to={enteredToTime}
          fromTime={getFromTime}
          toTime={getToTime}
          events={props.events}
        />
      </div>
      <div>
        <label className="white-text">Event Name:</label>
        <input type="text" onChange={getName} value={enteredName} />
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
      </div>
      <div>
        <button type="submit">Add Event</button>
      </div>
    </form>
  );
}

export default AddEvent;
