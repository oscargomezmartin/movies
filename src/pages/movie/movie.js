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
  movieInfo: { title, backdrop_path , poster_path} 
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
          <PosterMovie image={poster_path}/>
        </Col>
        <Col span={10} className="movie__info">
          <MovieInfo movieInfo={props.movieInfo} />
        </Col>
      </Row>
  </div>);
}

function PosterMovie (props) {
  const {image} = props;
  const posterPath = `https://image.tmdb.org/t/p/original${image}`;

  return <div style={{backgroundImage: `url(${posterPath})`}}/>
}

function MovieInfo(props) {
  const {movieInfo: {id, title, release_date, overview, genres}} = props;

  return <>
    <div className="movie__info-header">
      <h1>{title}
        <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
      </h1>
      <button>
        Ver trailer
      </button>
    </div>
    <div className="movie__info-content">
        <h3>General</h3>
        <p>{overview}</p>

        <h3>Géneros</h3>
        <ul>{genres.map( genres => (
          <li key={genres.id}> {genres.name} </li>
        ))}</ul>
      </div>
  </>;
}