import React from "react";
import "./Card.css";

export const Card = (props) => {
  return (
    <>
      <div className="card-container">
        <div className="service-logo">
          <img src={props.imgUrl} alt="" />
        </div>
        <h5 className="card-title">{props.title}</h5>
        <p>{props.desc}</p>
      </div>
    </>
  );
};
