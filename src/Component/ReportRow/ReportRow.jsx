import React from "react";
import "./ReportRow.scss";
import moment from "moment";
import { BsEye } from "react-icons/bs";

const ReportRow = (props) => {
  console.log(props.e);
  return (
    <>
      <tr>
        <td>{props.e.companyName}</td>
        <td>{moment(props.e.interviewDate).format("DD-MM-YYYY")}</td>
        <td>
          <div className="pasedoko">
            {props.e.status}
            <button
              className="oko pointer"
              onClick={() => {
                props.setPickedElement(props.e);
                props.setShowModal(true);
              }}
            >
              <BsEye />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ReportRow;
