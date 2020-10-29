import React, { useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Navbar
      defaultActiveKey={"#map"}
      className="justify-content-end"
      expand="md"
    >
      <Navbar.Brand href="#home">Trawler Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls=" basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>{"Map"}</Nav.Link>
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
