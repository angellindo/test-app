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
  const query = useQuery();

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

    if(!data.length) {
      search();
    }
  }, [query, data]);

  return (
    <div className="mt-5 ml-10 mr-10">
      <h1 className="text-4xl">Results</h1>
      <Filters />
      {!data.length && <FontAwesomeIcon className="self-center" icon={faSpinner} spin size="3x" />}
      <div className="movies mt-8 grid grid-cols-5 gap-4">
        {!!data.length &&
          data.map((movie, i) => {
            return <Card key={i} movie={movie} />;
          })}
      </div>
    </div>
  );
}
