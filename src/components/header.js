import * as React from "react";
import { Link } from "gatsby";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoUnifiers from "../images/logoUnifiers.png";

const Header = ({ siteTitle }) => (
  <>
    <Navbar
      collapseOnSelect
      expand="md"
      bg="white"
      className="custom-container-navbar sticky-top"
    >
      <Navbar.Brand href="#home">
        <img src={logoUnifiers} className="img-fluid" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="ml-auto">
          <Nav.Link href="/">home</Nav.Link>
          <Nav.Link href="#education">education</Nav.Link>
          <Nav.Link href="#skilling">skilling</Nav.Link>
          <Nav.Link href="#consulting">consulting</Nav.Link>
          <Nav.Link href="/team">team</Nav.Link>
          {/* <NavDropdown title="team" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">team</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default Header;
