import React from "react";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Nav
      variant="tabs"
      defaultActiveKey={"#map"}
      className="justify-content-end"
    >
      <Nav.Item>
        <Nav.Link href={"#map"}>{"Map"}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={"#data"}>{"Data"}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={"#why"}>{"Why?"}</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link href={"#about"}>{"About"}</Nav.Link>
      </Nav.Item> */}
    </Nav>
  );
}
