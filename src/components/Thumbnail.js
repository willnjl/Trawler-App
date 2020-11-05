import React from "react";

export default function Thumbnail({ url }) {
  return (
    <img
      src={
        url
          ? url
          : "https://github.com/willnjl/Trawler-App/blob/e51a89e5f1d5382794e7ac7170020178e3f416a9/src/assets/ship-front-view.png?raw=true"
      }
      className="popup-img"
      style={
        url
          ? { maxWidth: "175px" }
          : {
              maxWidth: "100px",
              margin: "1rem",
              padding: "1rem",
              borderRadius: "50%",
              backgroundColor: "#19D2E6",
            }
      }
      alt={"Vessel"}
    />
  );
}
