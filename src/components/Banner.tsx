import { apiUrls } from "api-url";
import axios from "../axios";
import { useEffect, useState } from "react";
import "./Banner.scss";

const baseImageUrl = "https://image.tmdb.org/t/p/original";

interface movieProps {
  title: string;
  name: string;
  original_name: string;
  backdrop_path: string;
  overview: string;
}

export const Banner = () => {
  const [movie, setMovie] = useState<movieProps>();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(apiUrls.netflixOriginals);
      const results = response.data.results;
      const randInt = Math.floor(Math.random() * results.length - 1);

      console.log(results);
      setMovie(results[randInt]);
    }
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (str: string | undefined, n: number) => {
    if (!str) return;
    return str.length > n ? `${str?.substring(0, n - 1)}...` : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${baseImageUrl}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>

        <p className="banner-description">{truncate(movie?.overview, 150)}</p>
      </div>

      <div className="banner-fadeBottom" />
    </header>
  );
};
