/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Styles/Homepage.css";
// import Button from "@mui/material/Button";
const Homepage = () => {
  const [message, setMessage] = useState("Hello");

  return (
    <div className="welcome-message">
      <h1>{message}, this is the Homepage for the application</h1>
      <button className="welcome-button" onClick={() => setMessage("Welcome")}>
        Click Me
      </button>
      <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
    </div>
  );
};

export default Homepage;
