import React from "react";
import "./ReportCard.scss";

const ReportCard = (props) => {
  return (
    <div
      className={
        props.selectedCandidate.id === props.e.id
          ? "clicked ReportCards pointer"
          : "ReportCards pointer"
      }
      onClick={() => props.setSelectedCandidate(props.e)}
    >
      <div className="slika">
        <img src={props.e.avatar} alt="pera"></img>
      </div>
      <div className="detalji">
        <h5>{props.e.name}</h5>
        <h6>{props.e.email}</h6>
      </div>
    </div>
  );
};

export default ReportCard;
