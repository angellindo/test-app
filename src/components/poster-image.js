import React from "react";

export default function PosterImage(props) {
  const size = !props.original ? "w500" : "original";
  return <img className="rounded" src={`https://image.tmdb.org/t/p/${size}${props.posterPath}`} alt={props.tilte} />;
}
