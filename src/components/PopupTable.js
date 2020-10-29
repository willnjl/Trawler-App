import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { howLongAgo, getCountry } from "../data/functions";

export default function PopupTable({ vessel }) {
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img variant="top" src={vessel.img_url} />
      <Card.Body>
        <Card.Title>
          <a href={vessel.vessel_url} target={"_blanks"}>
            {vessel.name}
          </a>
        </Card.Title>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Seen: <i>{howLongAgo(vessel.position_received)}</i>
          </ListGroupItem>
          <ListGroupItem>
            Flag: <strong>{getCountry(vessel.flag).country}</strong>
          </ListGroupItem>
          <ListGroupItem>
            Weight: <strong>{vessel.dwt} (DWT)</strong>
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
