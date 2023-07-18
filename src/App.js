import React, { useState } from "react";
import AddEvent from "./components/Events/AddEvent";
import EventsList from "./components/Events/EventsList";
import "./App.css";

function App() {
  const [eventsList, setEventsList] = useState([]);

  const addEventHandler = (name, from, to) => {
    const fromTimeValue = parseInt(from, 10);
    const toTimeValue = parseInt(to, 10);
    const isOverlapping = checkForTimeRangeOverlap(fromTimeValue, toTimeValue);

    if (isOverlapping) {
      alert("The selected time range overlaps with an existing event.");
      return;
    }

    setEventsList((prevEventsList) => {
      return [
        ...prevEventsList,
        { name: name, from: from, to: to, id: Math.random().toString() },
      ];
    });
  };

  const checkForTimeRangeOverlap = (fromTime, toTime) => {
    for (const event of eventsList) {
      const eventFromTime = parseInt(event.from, 10);
      const eventToTime = parseInt(event.to, 10);
      if (
        (fromTime >= eventFromTime && fromTime < eventToTime) ||
        (toTime > eventFromTime && toTime <= eventToTime)
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="App">
      <h1>Event Planner</h1>
      <AddEvent onAddEvent={addEventHandler} events={eventsList} />
      <EventsList events={eventsList} />
    </div>
  );
}

export default App;
