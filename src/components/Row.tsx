import axios from "../axios";
import { useEffect, useState } from "react";
import "./Row.scss";

const baseImageUrl = "https://image.tmdb.org/t/p/original";

export interface Props {
  title: string;
  apiPath: string;
  isLarge?: boolean;
}

export interface Movie {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
}

export const Row = ({ title, apiPath, isLarge }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiPath);
      setMovies(response.data.results);
    };
    fetchData();
  }, [apiPath]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie, _) => (
          <img
            key={movie.id}
            className={`row-poster ${isLarge && "row-poster-large"}`}
            src={`${baseImageUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};
