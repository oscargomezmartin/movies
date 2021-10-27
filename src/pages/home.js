import React from "react";
import useFetch from "../hooks/useFetch";
import { URL_API, API } from "../utils/constants";

import SliderMovies from "../components/SliderMovies/SliderMovies";

export default function Home() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );

  console.log(newMovies);

  return <SliderMovies movies={newMovies} />;
}
