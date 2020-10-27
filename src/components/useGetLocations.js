import React, { useState, useEffect } from "react";
import axios from "../axios";

const useGetLocations = (initial, selected) => {
  const [response, setResponse] = useState(initial);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`vessels/${selected}/locations`)
      .then(({ data }) => {
        console.log("get Vessels");
        setResponse(data.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selected]);

  return { response, isLoading };
};

export default useGetLocations;
