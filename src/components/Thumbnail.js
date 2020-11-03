import React from "react";

export default function Thumbnail({ url }) {
  return (
    <img
      src={
        url
          ? url
          : "https://github.com/willnjl/Trawler-App/blob/master/src/assets/icons8-fishing_boat.png"
      }
      className="popup-img"
      style={{ maxWidth: "175px" }}
      alt={"Vessel"}
    />
  );
}
