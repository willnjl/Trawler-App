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
          <th>IMO</th>
        </tr>
      </thead>
      <tbody>
        {vessels.map((vessel) => {
          return (
            <tr key={vessel.id}>
              <Thumbnail url={vessel.img_url} />
              <td>
                <a href={vessel.vessel_url}>{vessel.name}</a>
              </td>
              <td>{getCountry(vessel.flag).country}</td>
              <td className={"badge badge-primary badge-pill"}>
                {howLongAgo(vessel["position_received"])}
              </td>
              <td>{vessel.imo}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
