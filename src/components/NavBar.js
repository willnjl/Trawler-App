import React, { useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <h1 class="logo">Trawler Tracker</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls=" basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href={"#map"}>{"Map"}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={"#data"}>{"Data"}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={"#why"}>{"Why?"}</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
