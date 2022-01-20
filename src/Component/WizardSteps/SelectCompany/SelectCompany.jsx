import React from "react";
import "./SelectCompany.scss";
import ReportCompany from "../../ReportCompany/ReportCompany";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

const SelectCompany = (props) => {
  return (
    <div className="wizardpage2">
      <div className="searchWiz">
        <BsSearch className="lupica" />
        <input
          type="text"
          placeholder="Search"
          name="search"
          onChange={(e) => props.setSearchWiz(e.target.value)}
        ></input>
      </div>

      <div className="SelectCompany">
        {props.fetchResults[0]
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
              <ReportCompany
                e={e}
                setSelectedCompany={props.setSelectedCompany}
                selectedCompany={props.selectedCompany}
              />
            );
          })}
        <div className="btn">
          <button
            className="btnwiz pointer"
            onClick={() => {
              props.setSearchWiz("");
              props.setPageWiz(props.pageWiz - 1);
            }}
          >
            <FaArrowCircleLeft />
          </button>
          <button
            className="btnwiz pointer"
            onClick={() => {
              props.setSearchWiz("");
              props.setPageWiz(props.pageWiz + 1);
            }}
            disabled={props.selectedCompany === ""}
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectCompany;
