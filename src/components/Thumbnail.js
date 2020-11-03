import React from "react";

export default function Thumbnail({ url }) {
  return (
    <img
      src={
        url
          ? url
          : "https://github.com/willnjl/Trawler-App/blob/master/src/assets/icons8-fishing_boat.png?raw=true"
      }
      className="popup-img"
      style={url ? { maxWidth: "175px" } : { maxWidth: "100px" }}
      alt={"Vessel"}
    />
  );
}
