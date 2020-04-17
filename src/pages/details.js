import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";
import styles from "./details.module.css";

export default function Details() {
  return (
    <div className="details">
      <div className="movie-banner h-64 w-full bg-red-200"></div>
      <div className="mt-5 ml-10 mr-10">
        <h1 className="text-5xl">Title</h1>
        <h1>Tag line</h1>
        <div className="user-stats">
          <span className="rating mr-4">
            {[2, 4, 6, 8].map((stars) => {
              return <FontAwesomeIcon key={stars} icon={faStar} />;
            })}
            <FontAwesomeIcon key={12} icon={faEmptyStar} />
          </span>
          <span className="vote-count">50,900 Users</span>
        </div>
        <div className="basic-details mt-4">
          <span className={`${styles.basic_details} bg-gray-600 mr-4 inline-block`}>Language</span>
          <span className={`${styles.basic_details} bg-gray-600 mr-4 inline-block`}>year</span>
          <span className={`${styles.basic_details} bg-gray-600 mr-4 inline-block`}>Duration</span>
          <span className={`${styles.basic_details} bg-gray-600 mr-4 inline-block`}>PG rating</span>
          <span className={`${styles.basic_details} bg-gray-600 mr-4 inline-block`}>genre</span>
        </div>
        <section className="mt-4 flex">
          <div className={`${styles.poster} bg-gray-500 flex-shrink-0`} />
          <div className="synopsis-combo flex-grow ml-4">
            <div className="overview">
              <h4 className="text-xl">Overview</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className={`${styles.minor_details} mt-4`}>
              <dl>
                <dt>Coffee</dt>
                <dd>Black hot drink</dd>
                <dt>Milk</dt>
                <dd>White cold drink</dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
