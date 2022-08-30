// import React from "react"
import { apiUrls } from "api-url";
import { Banner } from "components/Banner";
import { Row } from "components/Row";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="NETFLIX ORIGUINALS" apiUrl={apiUrls.netflixOriginals} isLarge />
      <Row title="Top Rated" apiUrl={apiUrls.topRated} />
      <Row title="Action Movies" apiUrl={apiUrls.actionMovies} />
      <Row title="Comedy Movies" apiUrl={apiUrls.comedyMovies} />
      <Row title="Horror Movies" apiUrl={apiUrls.horrorMovies} />
      <Row title="Romance Movies" apiUrl={apiUrls.romanceMovies} />
      <Row title="DOcumentaries" apiUrl={apiUrls.documentMovies} />
    </div>
  );
}

export default App;
