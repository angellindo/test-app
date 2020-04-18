import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function Filters(props) {
  const [starState, setStars] = useState(0);

  const handleRating = (e, stars) => {
    const newStars = starState === stars ? -1 : stars;

    setStars(newStars);
    props.changeFilter(newStars);
  };

  return (
    <div className="filters w-full bg-gray-900 py-2 px-2 rounded">
      <div className="rating">
        <span>Rating:</span>{" "}
        {[2, 4, 6, 8, 10].map((stars) => {
          const starClass = stars <= starState ? "text-yellow-600" : "text-gray-600";
          return (
            <FontAwesomeIcon
              key={stars}
              onClick={(e) => {
                handleRating(e, stars);
              }}
              className={starClass}
              icon={faStar}
            />
          );
        })}
      </div>
    </div>
  );
}

Filters.propTypes = {
  changeFilter: PropTypes.func,
};
