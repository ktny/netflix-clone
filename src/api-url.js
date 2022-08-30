const API_KEY = process.env.REACT_APP_API_KEY;

export const apiUrls = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  netflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `/discover/tv?api_key=${API_KEY}&languager=en-us`,
  actionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  documentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};
