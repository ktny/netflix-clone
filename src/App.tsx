// import React from "react"
import { apiUrls } from "api-url";
import { Row } from "components/Row";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGUINALS" apiUrl={apiUrls.feachNetflixOriginals} isLarge />
      <Row title="Top Rated" apiUrl={apiUrls.feactTopRated} />
      <Row title="Action Movies" apiUrl={apiUrls.feactActionMovies} />
      <Row title="Comedy Movies" apiUrl={apiUrls.feactComedyMovies} />
      <Row title="Horror Movies" apiUrl={apiUrls.feactHorrorMovies} />
      <Row title="Romance Movies" apiUrl={apiUrls.feactRomanceMovies} />
      <Row title="DOcumentaries" apiUrl={apiUrls.feactDocumentMovies} />
    </div>
  );
}

export default App;
