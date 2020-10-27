import React from "react";

export default function Thumbnail({ url }) {
  return url ? (
    <img
      src={url}
      className="popup-img"
      style={{ maxWidth: "175px" }}
      alt={"Vessel"}
    />
  ) : (
    <td>{"no image"}</td>
  );
}
