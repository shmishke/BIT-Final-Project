import React from "react";
import "./ReportCompany.scss";
const ReportCompany = (props) => {
  return (
    <div
      className={
        props.e.id === props.selectedCompany.id
          ? "reportcompany clicked pointer"
          : "reportcompany pointer"
      }
      onClick={() => props.setSelectedCompany(props.e)}
    >
      {props.e.name}
    </div>
  );
};

export default ReportCompany;
