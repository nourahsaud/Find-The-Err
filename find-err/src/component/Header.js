import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Container, Nav, NavLink} from "react-bootstrap";

function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav><Link to="/Cards" className="nav">Cards</Link></Nav>
              <Nav><Link to="/About" className="nav">About</Link></Nav>
            </Nav>
          </Container>
        </Navbar>



    </div>


  );
}

export default Header;
