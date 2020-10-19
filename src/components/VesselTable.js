import React from "react";
import Table from "react-bootstrap/Table";

const howLongAgo = (timestamp) => {
  let now = Date.now();
  let then = new Date(timestamp);
  let elapsed = now - then.getTime();

  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return Math.round(elapsed / msPerYear) + " years ago";
  }
};

export default function VesselTable({ vessel }) {
  return (
    <>
      <img
        src="https://static.vesselfinder.net/ship-photo/8301187-277330000-f47c41dbb290736e2aa19b4c36f51f09/1?"
        className="popup-img"
      />
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
        </tbody>
      </Table>
    </>
  );
}
