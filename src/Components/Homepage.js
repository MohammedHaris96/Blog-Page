import React, { useState } from "react";
import "./Styles/Homepage.css";
const Homepage = () => {
  const [message, setMessage] = useState("Hello");

  return (
    <div className="welcome-message">
      <h1>{message} this is the Homepage for the application</h1>
      <button className="welcome-button" onClick={() => setMessage("Welcome")}>Click Me</button>
    </div>
  );
};

export default Homepage;
