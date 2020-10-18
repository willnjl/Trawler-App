import React, { useState, useEffect } from "react";
import L from "leaflet";
import leafletPip from "@mapbox/leaflet-pip";
import { Map, TileLayer, LayersControl, WMSTileLayer } from "react-leaflet";
import { data } from "../data/ukBounds";
import axios from "../axios";

const polyLayer = L.geoJSON(data, {
  style: {
    color: "#00008c",
    opacity: 0.6,
    fillColor: "red",
    fillOpacity: 0.5,
  },
});
const boundaryFilter = (vessels) =>
  leafletPip.pointInLayer([vessels["lon"], vessels["lat"]], polyLayer).length >
  0;

export default function LeafletComponent() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("vessels").then((response) => {
      setLoaded(true);
      const boats = response.data;
      console.log(boats.filter(boundaryFilter));
    });
  }, []);

  const view = {
    lat: 55.8309257,
    lon: -4.4509832,
    zoom: 4.3,
  };
  return (
    <>
      <Map
        className={"map" + " " + "main__elem"}
        center={[view.lat, view.lon]}
        zoom={view.zoom}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="Open Street Map" checked={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Marine Regions">
            <WMSTileLayer
              attribution='tiles &copy; <a href="https://www.marineregions.org/">marineregions.org</a>'
              layers="eez_boundaries,world_countries_coasts"
              url="http://geo.vliz.be/geoserver/MarineRegions/wms?"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </Map>
      <p>{loaded ? "true " : "false"}</p>
    </>
  );
}
