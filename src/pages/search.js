import React, { useState, useEffect } from "react";
import Card from "../components/card";
import Filters from "../components/filters";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(-1);
  const query = useQuery();

  function applyFilter() {
    if(filter === -1) return data;

    const filteredMovies = data.filter((movie) => {
      return movie.vote_average < filter && movie.vote_average > (filter - 2);
    });

    return filteredMovies;
  }

  function renderCards() {
    if (!data.length) return null;

    return applyFilter().map((movie, i) => {
      console.log(movie.vote_average)
      return <Card key={i} movie={movie} />;
    });
  }

  useEffect(() => {
    async function search() {
      try {
        const res = await axios(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query.get("q")}`
        );
        setData(res.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    if (!data.length) {
      search();
    }
  }, [query, data]);

  return (
    <div className="mt-5 ml-10 mr-10">
      <h1 className="text-4xl">Results</h1>
      <Filters changeFilter={setFilter} />
      {!data.length && <FontAwesomeIcon className="self-center" icon={faSpinner} spin size="3x" />}
      <div className="movies mt-8 grid grid-cols-5 gap-4">{renderCards(data, filter)}</div>
    </div>
  );
}
