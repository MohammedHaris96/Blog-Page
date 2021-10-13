import React from "react";
import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/home" className="main-navbar">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
