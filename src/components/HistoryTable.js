import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { howLongAgo } from "../data/functions";
import useGetLocations from "./useGetLocations";
import Loading from "./Loading";

export default function VesselsTable({ selected }) {
  const [loaded, setLoaded] = useState(false);
  const { response, isLoading } = useGetLocations({}, selected);

  useEffect(() => {
    if (!isLoading) {
      setLoaded(true);
    }
  });
  let { vessel, locations } = response;

  return loaded ? (
    <>
      <Table striped>
        <thead id={"data"}>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Flag</th>
            <th>Position Last Recieved</th>
            <th>link</th>
            <th>Dead Weight Tonnage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{/* <img src={vessel.img_url} className="popup-img" /> */}</td>

            <td>{vessel.name}</td>
            <td>{vessel.flag}</td>
            <td>{howLongAgo(vessel.position_received)}</td>
            <td>{vessel.vessel_url}</td>
            <td>{vessel.dwt}</td>
          </tr>
        </tbody>
      </Table>
      <Table>
        <thead id={"Locations"}>
          <tr>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Position Received</th>
            <th>in UK ?</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((row) => {
            return (
              <tr>
                <td>{row.lat}</td>
                <td>{row.lon}</td>
                <td>{row.position_received}</td>
                <td>{row.in_area ? "" : "✔"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  ) : (
    <Loading />
  );
}
