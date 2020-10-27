import React from "react";
import Table from "react-bootstrap/Table";
import { howLongAgo, getCountry } from "../data/functions";
import Thumbnail from "./Thumbnail";
export default function VesselsTable({ vessels }) {
  return (
    <Table striped responsive="xl" size="sm">
      <thead id={"data"}>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Flag</th>
          <th>Updated</th>
          <th>Link</th>
          <th>IMO</th>
        </tr>
      </thead>
      <tbody>
        {vessels.map((vessel) => {
          return (
            <tr key={vessel.id}>
              <Thumbnail url={vessel.img_url} />
              <td>{vessel.name}</td>
              <td>{getCountry(vessel.flag).country}</td>
              <td>{howLongAgo(vessel["position_received"])}</td>
              <td>
                <a href={vessel.vessel_url}>Link</a>
              </td>
              <td>{vessel.imo}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
