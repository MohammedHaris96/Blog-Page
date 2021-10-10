import React, { useState } from "react";
const Homepage = () => {
  const [message, setMessage] = useState("Hello");

  return (
    <div>
      <h1>{message} this is the Homepage for the application</h1>
      <button onClick={() => setMessage("Welcome")}>Click Me</button>
    </div>
  );
};

export default Homepage;
