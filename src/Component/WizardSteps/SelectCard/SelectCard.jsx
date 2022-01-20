import React, { useState } from "react";
import "./SelectCard.scss";
import ReportCard from "../../ReportCard/ReportCard";
//FaArrowCircleRight
import { FaArrowCircleRight } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

const SelectCard = (props) => {
  return (
    <div className="wizardpage1">
      <div className="searchWiz ">
        <BsSearch className="lupica" />
        <input
          type="text"
          placeholder="Search"
          name="search"
          onChange={(e) => props.setSearchWiz(e.target.value)}
        ></input>
      </div>
      <div className="SelectCard">
        {props.fetchResults[1]
          .filter((e) => {
            if (props.searchWIz == "") {
              return e;
            } else if (
              e.name.toLowerCase().includes(props.searchWiz.toLowerCase())
            )
              return e;
          })
          .map((e) => {
            return (
              <ReportCard
                setSelectedCandidate={props.setSelectedCandidate}
                e={e}
                selectedCandidate={props.selectedCandidate}
              />
            );
          })}
        <button
          className="btnwiz pointer"
          onClick={() => {
            props.setSearchWiz("");
            props.setPageWiz(props.pageWiz + 1);
          }}
          disabled={props.selectedCandidate === ""}
        >
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

export default SelectCard;
