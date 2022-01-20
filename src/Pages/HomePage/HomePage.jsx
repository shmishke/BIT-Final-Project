import React, { useState } from "react";
import "./HomePage.scss";
import CandidateCard from "../../Component/CandidateCard/CandidateCard";
import ModalLog from "../../Component/ModalLog/ModalLog";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const HomePage = (props) => {
  const [searchHome, setSearchHome] = useState("");
  return (
    <div className="homepage">
      {props.showLog && (
        <ModalLog
          setShowLog={props.setShowLog}
          showLog={props.showLog}
          isLogin={props.isLogin}
          setIsLogin={props.setIsLogin}
        />
      )}
      <div className="heroimg">
        <h1>We belive in our clients</h1>
      </div>
      <div className="subtitle">
        <h2>Candidates</h2>
        <div>
          <BsSearch className="lupica" />
          <input
            className="homesearch"
            type="text"
            placeholder="Search"
            name="search"
            onChange={(e) => setSearchHome(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="CardList">
        {props.fetchResults[1]
          .filter((e) => {
            if (searchHome == "") {
              return e;
            } else if (
              e.name.toLowerCase().includes(searchHome.toLowerCase())
            ) {
              return e;
            }
          })
          .map((e, i) => {
            return (
              <Link to={`/detailsPage/${e.id}`}>
                <CandidateCard fetchResults={props.fetchResults} e={e} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
