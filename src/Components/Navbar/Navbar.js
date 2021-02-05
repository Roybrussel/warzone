import React from "react";
import "./Navbar.css";

import { Navbar, Nav } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar className="justify-content-center navbar">
      <Nav>
        <Nav.Link href="#about-section" className="navlink">
          About
        </Nav.Link>
        <Nav.Link href="#matches-section" className="navlink">
          Matches
        </Nav.Link>
        <Nav.Link href="#socials-section" className="navlink">
          Socials
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigationbar;
