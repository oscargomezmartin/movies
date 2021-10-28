import React from "react";
import {Row, Col} from "antd"
import useFetch from "../hooks/useFetch";
import { URL_API, API } from "../utils/constants";
import MovieList from "../components/MovieList";

import SliderMovies from "../components/SliderMovies/SliderMovies";

export default function Home() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`
  );

  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`
  );

  return ( 
    <>  
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title="Películas populares" movies={popularMovies}/>
        </Col>
        <Col span={12}>
          "..."
        </Col>
      </Row>
      
    </>);
}
