// import React from "react"
import { apiPaths } from "api-paths";
import { Banner } from "components/Banner";
import { Row } from "components/Row";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="NETFLIX ORIGUINALS" apiPath={apiPaths.netflixOriginals} isLarge />
      <Row title="Top Rated" apiPath={apiPaths.topRated} />
      <Row title="Action Movies" apiPath={apiPaths.actionMovies} />
      <Row title="Comedy Movies" apiPath={apiPaths.comedyMovies} />
      <Row title="Horror Movies" apiPath={apiPaths.horrorMovies} />
      <Row title="Romance Movies" apiPath={apiPaths.romanceMovies} />
      <Row title="DOcumentaries" apiPath={apiPaths.documentMovies} />
    </div>
  );
}

export default App;
