import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { howLongAgo, getCountry } from "../data/functions";
import useGetLocations from "./useGetLocations";
import Loading from "./Loading";
import Thumbnail from "./Thumbnail";

export default function VesselsTable({ selected }) {
  const [loaded, setLoaded] = useState(false);
  const { response, isLoading } = useGetLocations({}, selected);

  useEffect(() => {
    if (!isLoading) {
      setLoaded(true);
    }
  }, [isLoading]);
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
            <th>DWT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Thumbnail url={vessel.img_url} />
            </td>
            <td>{vessel.name}</td>
            <td>{getCountry(vessel.flag).country}</td>
            <td>{howLongAgo(vessel.position_received)}</td>
            <td>
              <a href={vessel.vessel_url}>{"Link"}</a>
            </td>
            <td>{vessel.dwt}</td>
          </tr>
        </tbody>
      </Table>
      <Table striped>
        <thead id={"Locations"}>
          <tr>
            <th>Updated</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Position Received</th>
            <th>in UK ?</th>
          </tr>
        </thead>
        <tbody>
          {[...locations].reverse().map((row) => {
            return (
              <tr key={vessel.id}>
                <td>
                  <i> {howLongAgo(row.position_received)}</i>
                </td>
                <td>{row.lat}</td>
                <td>{row.lon}</td>
                <td>{row.position_received},</td>
                <td>{row.in_area ? "✔" : null}</td>
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
