import React, { useState, useEffect } from "react";
import axios from "./axios";
import Info from "./components/Info";

import LeafletComponent from "./components/LeafletComponent";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import VesselsTable from "./components/VesselsTable";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    axios.get("vessels").then((response) => {
      setLoaded(true);
      const data = response.data;
      setBoats([...data]);
    });
  }, []);
  return (
    <div className="page-wrapper">
      <header className="App-header">
        <NavBar />
      </header>
      <LeafletComponent boats={boats} loaded={loaded} id={"map"} />
      {loaded ? <VesselsTable vessels={boats} /> : <Loading />}
      <Info />
    </div>
  );
}

export default App;
