import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./card.module.css";

export default function Card() {
  return (
    <div className={`${styles.card} inline-block`}>
      <div className={styles.banner}>
        <div className="rating">
          <FontAwesomeIcon icon={faStar} />
          <span>7.8</span>
        </div>
      </div>
      <div className="description">
        <div className="title">Beauuty and the Beast</div>
        <div className="genre">Fantasy</div>
      </div>
    </div>
  );
}
