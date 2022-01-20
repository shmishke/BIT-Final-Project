import React, { useEffect } from "react";
import "./AdminCard.scss";
import moment from "moment";
import { BsEye } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import ModalDelete from "../../Component/ModalDelete/ModalDelete";

const AdminCard = (props) => {
  return (
    <div className="ReportCard">
      <div className="name">{props.e.companyName}</div>
      <div className="name">{props.e.candidateName}</div>
      <div className="date">
        {moment(props.e.interviewDate).format("DD-MMM-YYYY")}
      </div>
      <div className="status">{props.e.status}</div>
      <div className="button">
        <button
          className="pointer"
          onClick={() => {
            props.setPickedElement(props.e);
            props.setShowModal(true);
          }}
        >
          <BsEye />
        </button>
        <button
          className="pointer"
          onClick={() => {
            props.setDeleteModal(true);
            props.setPickedElement(props.e);
          }}
        >
          <GrClose />
        </button>
      </div>
      {/* {props.deleteModal && (
        <ModalDelete
          setDeleteModal={props.setDeleteModal}
          e={props.e}
          setReload={props.setReload}
          reload={props.reload}
        />
      )} */}
    </div>
  );
};

export default AdminCard;
