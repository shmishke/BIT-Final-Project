import React from "react";
import "./CandidateCard.scss";

const CandidateCard = (props) => {
  return (
    <div className="CandidateCard">
      <img src={props.e.avatar}></img>
      <h4>{props.e.name}</h4>
      <h4>{props.e.email}</h4>
    </div>
  );
};

export default CandidateCard;
