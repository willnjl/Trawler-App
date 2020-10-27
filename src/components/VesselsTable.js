import React from "react";
import Table from "react-bootstrap/Table";
import { howLongAgo, getCountry } from "../data/functions";
export default function VesselsTable({ vessels }) {
  return (
    <Table striped>
      <thead id={"data"}>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>DWT</th>
          <th>Flag</th>
          <th>Position Last Recieved</th>
          <th>IMO</th>
        </tr>
      </thead>
      <tbody>
        {vessels.map((vessel) => {
          return (
            <tr key={vessel.id}>
              {vessel.img_url ? (
                <img
                  src={vessel.img_url}
                  className="popup-img"
                  style={{ maxWidth: "175px" }}
                  alt={"Vessel"}
                />
              ) : (
                <td>{"no image"}</td>
              )}
              <td>{vessel.name}</td>

              <td>
                {"Latitude: "}
                {vessel.lat}
              </td>

              <td>
                {"Longitude: "}
                {vessel.lon}
              </td>

              <td>{vessel.dwt}</td>
              <td>{getCountry(vessel.flag).country}</td>
              <td>{howLongAgo(vessel["position_received"])}</td>
              <td>{vessel.imo}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
