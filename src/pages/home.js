import React, { useState, useEffect } from "react";
import Card from "../components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function discover() {
      try {
        const res = await axios(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`
        );
        setData(res.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    if (!data.length) {
      discover();
    }
  }, [data]);

  return (
    <div className="mt-5 ml-10 mr-10 flex flex-col">
      <h1 className="text-4xl ">Discover</h1>
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
