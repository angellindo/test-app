import React from "react";
import Card from "../components/card";
import Filters from "../components/filters";

export default function Search() {
  return (
    <div className="mt-5 ml-10 mr-10">
      <h1 className="text-4xl">Results</h1>
      <Filters />
      <div className="movies mt-8 grid grid-cols-5 gap-4">
        {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((v, i) => {
          return <Card key={i}/>;
        })}
      </div>
    </div>
  );
}
