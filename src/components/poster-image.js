import React from "react";

export default function PosterImage(props) {
  return <img className="rounded" src={`https://image.tmdb.org/t/p/w500${props.posterPath}`} alt={props.tilte} />;
}
