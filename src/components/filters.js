import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./filters.module.css";

export default function Filters() {
  const handleRating = (e, stars) => {
    console.log(stars)
  };

  return (
    <div className="filters w-full bg-gray-900 py-2 px-2 rounded">
      <div className="rating">
        <span>Rating:</span>{" "}
        {[2, 4, 6, 8, 10].map((stars) => {
          return (
            <FontAwesomeIcon
              key={stars}
              onClick={(e) => {
                handleRating(e, stars);
              }}
              className={styles.star}
              icon={faStar}
            />
          );
        })}
      </div>
    </div>
  );
}
