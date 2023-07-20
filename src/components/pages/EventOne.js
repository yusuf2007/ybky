import React, { useState } from "react";
import AddEvent from "../Events/AddEvent";
import EventsList from "../Events/EventsList";
import "./Event.css";
import { Link } from "react-router-dom";

function EventOne(props) {
  const [eventsList, setEventsList] = useState([]);

  const addEventHandler = (name, from, to) => {
    setEventsList((prevEventsList) => {
      return [
        ...prevEventsList,
        { name: name, from: from, to: to, id: Math.random().toString() },
      ];
    });
  };

  const deleteEventHandler = (eventId) => {
    setEventsList((prevEventsList) => {
      const updatedEvents = prevEventsList.filter(
        (event) => event.id !== eventId
      );
      return updatedEvents;
    });
  };

  return (
    <div className="main">
      <h1>{props.eventOne.name}</h1>
      <Link to="/" className="back-btn">
        Back
      </Link>
      <AddEvent
        onAddEvent={addEventHandler}
        events={eventsList}
        title={props.eventOne.type}
      />
      <EventsList events={eventsList} onDeleteEvent={deleteEventHandler} />
    </div>
  );
}

export default EventOne;
