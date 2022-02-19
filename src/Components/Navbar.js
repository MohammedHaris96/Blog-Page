import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <Container fluid>
      <Row className="navbar">
        <div className="nav-links d-flex">
          <div className="m-2">
            {" "}
            <Link to="/">Home</Link>
          </div>
          <div className="m-2">
            <Link to="/about">About Page</Link>
            <Link to="/about">About Page</Link>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Navbar;
