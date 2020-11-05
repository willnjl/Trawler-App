import React, { useState, useEffect } from "react";

import axios from "./axios";
import Info from "./components/Info";
import Jumbotron from "react-bootstrap/Jumbotron";
import LeafletComponent from "./components/LeafletComponent";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Tables from "./components/Tables";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    axios.get("vessels").then((response) => {
      setLoaded(true);
      console.log("get locations!");
      const data = response.data;
      setBoats([...data]);
    });
  }, []);

  return (
    <div className="page-wrapper">
      <NavBar />
      <Jumbotron as={"header"} className={"jumbotron"}>
        <div className={"jumbotron_body"}>
          <h1 class="logo">Trawler Tracker</h1>
          <p>
            <i>
              Monitoring the activity of super trawlers and factory ships in the
              UK and around the globe.
            </i>
          </p>
        </div>
      </Jumbotron>

      <LeafletComponent boats={boats} loaded={loaded} id={"map"} />
      {loaded ? <Tables vessels={boats} /> : <Loading />}
      <Info />
    </div>
  );
}

export default App;
