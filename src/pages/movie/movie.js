import React from "react";
import {Row, Col, Button} from 'antd';
import {useParams} from 'react-router-dom'
import moment from 'moment'
import useFetch from "../../hooks/useFetch";
import {URL_API, API} from "../../utils/constants"
import Loading from "../../components/Loading"

import "./movie.scss"

export default function Movie() {
  const {id} = useParams();

  const movieInfo = useFetch(
    `${URL_API}/movie/${id}?api_key=${API}&language=es-ES`
  )

  if(!movieInfo.result || movieInfo.loading) {
    return <Loading/>;
  }

  return <RenderMovie movieInfo={movieInfo.result}/>;
}

function RenderMovie(props) {

const {
  movieInfo: { title, backdrop_path } 
} = props;

const backDropPath=`https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
  <div 
    className="movie" 
    style={{backgroundImage: `url(${backDropPath})`}}
  >
    <div className="movie__dark"></div>
      <Row>
        <Col span={8} offset={3} className="movie__poster">
Caratula
        </Col>
        <Col span={10} className="movie__info">
          Movie Info
        </Col>
      </Row>
  </div>);
}
