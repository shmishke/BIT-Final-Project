import React from "react";
import "./Header.scss";
import { FaHandSpock } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();

  return (
    <div className="Header pointer" onClick={() => history.push("/")}>
      <h1>
        B1T
        <FaHandSpock />
      </h1>

      <div>
        {!(props.isLogin == "undefined" || props.isLogin == null) ? (
          <button
            className="logbtn"
            onClick={() => {
              props.setIsLogin(null);
              localStorage.clear();
            }}
          >
            Logout
          </button>
        ) : (
          <button className="logbtn" onClick={() => props.setShowLog(true)}>
            LogIn
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
