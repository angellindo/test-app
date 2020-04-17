import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";
import styles from "./details.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import PosterImage from "../components/poster-image";
import numeral from "numeral";

export default function Details() {
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    async function discover() {
      try {
        const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    if (!Object.entries(movie).length) {
      discover();
    }
  }, [id, movie]);

  if (!movie || !Object.entries(movie).length) {
    return (
      <div className="details">
        <div className="mt-5 ml-10 mr-10 flex flex-col items-center">
          <FontAwesomeIcon className="self-center" icon={faSpinner} spin size="3x" />
        </div>
      </div>
    );
  }

  return (
    <div className="details relative">
      <div className={`${styles.banner} overflow-hidden w-full`}>
        <PosterImage original posterPath={movie.backdrop_path} title={movie.title} />
        <div className={`${styles.gradient} pt-5 pl-10 pr-10 absolute top-0`}>
          <h1 className="text-5xl">{movie.title}</h1>
          <h1>{movie.tagline}</h1>
          <div className="user-stats mt-2">
            <span className="rating mr-4">
              {[2, 4, 6, 8].map((stars) => {
                return <FontAwesomeIcon key={stars} icon={faStar} />;
              })}
              <FontAwesomeIcon key={12} icon={faEmptyStar} />
            </span>
            <span className="vote-count">{`${movie.vote_count} Users`}</span>
          </div>
          <div className="basic-details mt-4 font-bold text-gray-500">
            <span className="mr-4">{movie.spoken_languages.map((l) => l.name).join(", ")}</span>
            <span className="mr-4">{movie.release_date}</span>
            <span className="mr-4">{movie.runtime} min</span>
            <span className="mr-4">{movie.genres.map((g) => g.name).join(", ")}</span>
          </div>
          <section className="mt-4 flex">
            <div className={`${styles.poster} bg-gray-500 flex-shrink-0 rounded`}>
              <PosterImage posterPath={movie.poster_path} title={movie.title} />
            </div>
            <div className="synopsis-combo flex-grow ml-4">
              <div className="overview">
                <h4 className="text-xl">Overview</h4>
                <p>{movie.overview}</p>
              </div>
              <div className={`${styles.minor_details} mt-4`}>
                <dl>
                  <dt>Budget</dt>
                  <dd>{numeral(movie.budget).format("($0,0)")}</dd>
                  <dt>Revenue</dt>
                  <dd>{numeral(movie.revenue).format("($0,0)")}</dd>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
