import React from "react";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import EventOne from "./components/pages/EventOne";
import EventTwo from "./components/pages/EventTwo";
import EventThree from "./components/pages/EventThree";

const DUMMY_EVENTS = [
  {
    page: 1,
    count: 3,
    page_size: 10,
    results: [
      {
        id: 1,
        name: "mytaxi",
        type: "focus",
        capacity: 1,
      },
      {
        id: 2,
        name: "workly",
        type: "team",
        capacity: 5,
      },
      {
        id: 3,
        name: "express24",
        type: "conference",
        capacity: 15,
      },
    ],
  },
];

const router = createBrowserRouter([
  { path: "/", element: <Home eventsName={DUMMY_EVENTS[0]} /> },
  {
    path: "/event1",
    element: <EventOne eventOne={DUMMY_EVENTS[0].results[0]} />,
  },
  {
    path: "/event2",
    element: <EventTwo eventTwo={DUMMY_EVENTS[0].results[1]} />,
  },
  {
    path: "/event3",
    element: <EventThree eventThree={DUMMY_EVENTS[0].results[2]} />,
  },
  {},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
