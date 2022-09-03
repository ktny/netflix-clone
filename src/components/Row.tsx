import axios from "../axios";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./Row.scss";

const baseImageUrl = "https://image.tmdb.org/t/p/original";

interface Props {
  title: string;
  apiPath: string;
  isLarge?: boolean;
}

interface Movie {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
}

interface Options {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
}

export const Row = ({ title, apiPath, isLarge }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiPath);
      setMovies(response.data.results);
    };
    fetchData();
  }, [apiPath]);

  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerUrl = await axios.get(`/movie/${movie.id}/videos`);
      setTrailerUrl(trailerUrl.data.results[0]?.key);
    }
  };

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
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
