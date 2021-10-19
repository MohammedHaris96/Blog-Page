import React, { useState } from "react";
import "./Styles/Homepage.css";
import { Button } from "react-bootstrap";
const Homepage = () => {
  const [message, setMessage] = useState("Hello");

  return (
    <div className="welcome-message">
      <h1>{message}, this is the Homepage for the application</h1>
      <Button className="welcome-button" onClick={() => setMessage("Welcome")}>
        Click Me
      </Button>
    
    </div>
  );
};

export default Homepage;
