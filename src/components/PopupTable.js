import React from "react";
import Table from "react-bootstrap/Table";
import { howLongAgo } from "../data/functions";

export default function PopupTable({ vessel }) {
  return (
    <>
      <img src={vessel.img_url} className="popup-img" />
      <Table striped bordered>
        <tbody>
          <tr>
            <th scope="row">{"Vessel Name"}</th>
            <td>{vessel.name}</td>
          </tr>
          <tr>
            <th scope="row">{"Flag"}</th>
            <td>
              <i>{vessel.flag}</i>
            </td>
          </tr>
          <tr>
            <th scope="row">{"Dead Weight Tonnage"}</th>
            <td>{vessel.dwt}</td>
          </tr>
          <tr>
            <th scope="row">{"Position Received"}</th>
            <td>
              <i>{howLongAgo(vessel["signal_received"])}</i>
            </td>
          </tr>
          <tr>
            <th scope="row">{"info"}</th>
            <td>
              <a href={vessel.vessel_url}>{"Link"}</a>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
