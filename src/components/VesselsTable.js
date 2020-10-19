import React from "react";
import Table from "react-bootstrap/Table";
import { howLongAgo } from "../data/functions";
export default function VesselsTable({ vessels }) {
  return (
    <Table striped>
      <thead id={"data"}>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Location</th>
          <th>Dead Weight Tonnage</th>
          <th>Flag</th>
          <th>Position Last Recieved</th>
          <th>IMO</th>
        </tr>
      </thead>
      <tbody>
        {vessels.map((vessel) => {
          return (
            <tr>
              <td>{vessel.id}</td>
              <td>{vessel.name}</td>
              <td>
                <p>
                  {"Latitude: "}
                  {vessel.lat}
                </p>

                <p>
                  {"Longitude: "}
                  {vessel.lon}
                </p>
              </td>
              <td>{vessel.dwt}</td>
              <td>{vessel.flag}</td>
              <td>{howLongAgo(vessel["signal_received"])}</td>
              <td>{vessel.imo}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
