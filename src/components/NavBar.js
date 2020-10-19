import React from "react";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Nav
      variant="pills"
      defaultActiveKey={"/map"}
      className="justify-content-end"
    >
      <Nav.Item>
        <Nav.Link href={"./about"}>{"Map"}</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>{"About"}</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
