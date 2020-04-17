import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory, Link } from "react-router-dom";

export default function AppHeader() {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    const path = query === "" ? "/" : `/search?q=${query}`;

    history.push(path);
  }

  return (
    <header className="w-full bg-black pb-4 pt-4 flex items-center">
      <Link className="inline-block flex-1 pl-4 font-bold" to={"/"}>The Movie Theater</Link>
      <label className="flex flex-1">
        <span className="inline-block py-2 pl-2 pr-2 bg-gray-800 rounded-l-lg">
          <FontAwesomeIcon className="text-gray-600" icon={faSearch} />
        </span>
        <form className="flex flex-grow" onSubmit={handleSubmit}>
          <input
            className="flex-grow inline-block bg-gray-800 font-bold py-2 pr-4 rounded-r-lg"
            type="text"
            placeholder="Movie name"
            name="search"
          />
        </form>
      </label>
      <span className="inline-block flex-1 text-right pr-4">
        User Name
      </span>
    </header>
  );
}
