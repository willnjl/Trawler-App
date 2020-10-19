import React, { useState, useEffect } from "react";
import leafletPip from "@mapbox/leaflet-pip";
import icon from "../assets/marker-icon.png";

import {
  Map,
  TileLayer,
  LayersControl,
  WMSTileLayer,
  Marker,
  Popup,
  LayerGroup,
  GeoJSON,
} from "react-leaflet";
import L from "leaflet";
import { data } from "../data/ukBounds";

import PopupTable from "./PopupTable";

const polyLayer = L.geoJSON(data, {
  style: {
    color: "#00008c",
    opacity: 0.6,
    fillColor: "red",
    fillOpacity: 0.5,
  },
});

const vesselMarker = L.icon({
  iconUrl: icon,
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -30],
});

const boundaryStyle = () => {
  return {
    color: "red",
  };
};
const boundaryFilter = (vessels) =>
  leafletPip.pointInLayer([vessels.lon, vessels.lat], polyLayer).length > 0;

export default function LeafletComponent({ boats, loaded }) {
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
          <LayersControl.Overlay name="Boundary" checked={true}>
            <GeoJSON data={data} style={boundaryStyle()} />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Supertrawlers" checked={true}>
            <LayerGroup>
              {loaded
                ? boats.map((vessel) => {
                    return (
                      <Marker
                        position={[vessel.lat, vessel.lon]}
                        icon={vesselMarker}
                        key={vessel.id}
                        id={vessel.id}
                      >
                        <Popup key={vessel.id}>
                          <PopupTable vessel={vessel} />
                        </Popup>
                      </Marker>
                    );
                  })
                : null}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </Map>
    </>
  );
}
