import React from "react";
import { Nav, Container, Row } from "react-bootstrap";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <Container fluid>
      <Row className="navbar">
        <Nav className="main-navbar">
          <Nav.Item>
            <Nav.Link href="/home" className="main-navbar-link">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="main-navbar-link">
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
    </Container>
  );
};

export default Navbar;
