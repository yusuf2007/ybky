import React from "react";
import "./EventsList.css"; // Import the CSS file for EventsList styles

function EventsList(props) {
  return (
    <div className="events-list">
      <h2>Events List</h2>
      <ul>
        {props.events.map((event) => (
          <li key={event.id} className="event-item">
            <div>{event.name}</div>
            <div>
              {event.from}:00 - {event.to}:00
            </div>
            <button onClick={() => props.onDeleteEvent(event.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
