import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  return (
    <div className="main-wrapper">
      <div className="box">
        <Link to="/event1">Event: {props.eventsName.results[0].name}</Link>
      </div>
      <div className="box">
        <Link to="/event2">Event: {props.eventsName.results[1].name}</Link>
      </div>
      <div className="box">
        <Link to="/event3">Event: {props.eventsName.results[2].name}</Link>
      </div>
    </div>
  );
}

export default Home;
