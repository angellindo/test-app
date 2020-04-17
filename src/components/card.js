import React from "react";
import PropTypes from "prop-types";
import styles from "./card.module.css";
import { Link } from "react-router-dom";
import PosterImage from "./poster-image";

export default function Card(props) {
  const { movie } = props;

  return (
    <div className={`${styles.card} inline-block`}>
      <div className={`${styles.poster} rounded`}>
        <Link to={`/details/${movie.id}`}>
          <PosterImage posterPath={movie.poster_path} title={movie.title} />
        </Link>
      </div>
      <div className="title mt-2 font-bold text-sm">
        <Link to={`/details/${movie.id}`}>{movie.title}</Link>
      </div>
    </div>
  );
}

Card.propTypes = {
  movie: PropTypes.object,
};
