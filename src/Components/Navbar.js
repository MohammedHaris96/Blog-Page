import React from "react";
import { Nav, Container, Row } from "react-bootstrap";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <Row className="navbar">
      <Nav variant="tabs" defaultActiveKey="/home" className="main-navbar">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
      </Nav>
    </Row>
  );
};

export default Navbar;
