import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="Monsters-rolodex"
        src={`https://robohash.org/${
          props.monster.id + 11
        }?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
