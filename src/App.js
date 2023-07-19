import React, { useState } from "react";
import AddEvent from "./components/Events/AddEvent";
import EventsList from "./components/Events/EventsList";
import "./App.css";

function App() {
  const [eventsList, setEventsList] = useState([]);

  const addEventHandler = (name, from, to) => {
    setEventsList((prevEventsList) => {
      return [
        ...prevEventsList,
        { name: name, from: from, to: to, id: Math.random().toString() },
      ];
    });
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
