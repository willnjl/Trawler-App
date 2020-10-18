import axios from "axios";

export default axios.create({
  baseURL: "https://trawler-api.herokuapp.com/api/",
  headers: {
    Accept: "application/json",
  },
});
