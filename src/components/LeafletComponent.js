import React, { useState, useEffect } from "react";
import leafletPip from "@mapbox/leaflet-pip";
import icon from "../assets/icons8-fishing_boat.png";

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
  iconSize: [50, 50],
  iconAnchor: [25, 40],
  popupAnchor: [0, -30],
});

const boundaryStyle = () => {
  return {
    color: "red",
  };
};
const boundaryFilter = (vessels) =>
  leafletPip.pointInLayer([vessels.lon, vessels.lat], polyLayer).length > 0;

const view = {
  lat: 55.8309257,
  lon: -4.4509832,
  zoom: 3.5,
};
//     component

export default function LeafletComponent({ boats, loaded }) {
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
          <LayersControl.Overlay name="UK only" checked={true}>
            <LayerGroup>
              {loaded
                ? boats.filter(boundaryFilter).map((vessel) => {
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
          <LayersControl.Overlay name=" All Supertrawlers">
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
