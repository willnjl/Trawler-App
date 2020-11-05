import React from "react";
import Table from "react-bootstrap/Table";
import { howLongAgo, getCountry } from "../data/functions";
import Thumbnail from "./Thumbnail";
import Badge from "react-bootstrap/Badge";
export default function VesselsTable({ vessels }) {
  return (
    <Table striped responsive="xl" size="sm" variant="dark">
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
                <a className="table__link" href={vessel.vessel_url}>
                  {vessel.name}
                </a>
              </td>
              <td>{getCountry(vessel.flag).country}</td>
              <td>
                <Badge pill variant="time-ago">
                  {howLongAgo(vessel["position_received"])}
                </Badge>
              </td>
              <td>{vessel.imo}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
