import React from "react";
import "./Footer.scss";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const Footer = () => {
  return (
    <div className="Footer">
      <FaReact />
      {/* <h5>Nikola Ostojic</h5>
      <h5>Milos Delic</h5>
      <h5>Ivan Likodric</h5>
      <h5>Pavle Snajdar</h5> */}
      <IoLogoJavascript />
    </div>
  );
};

export default Footer;
