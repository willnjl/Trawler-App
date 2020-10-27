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
          <th>Latitude</th>
          <th>Longitude</th>
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

              <tc>
                {"Latitude: "}
                {vessel.lat}
              </tc>

              <td>
                {"Longitude: "}
                {vessel.lon}
              </td>

              <td>{vessel.dwt}</td>
              <td>{vessel.flag}</td>
              <td>{howLongAgo(vessel["position_received"])}</td>
              <td>{vessel.imo}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
