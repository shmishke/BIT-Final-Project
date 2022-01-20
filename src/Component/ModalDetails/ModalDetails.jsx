import React from "react";
import "./ModalDetails.scss";
import moment from "moment";
import { GrClose } from "react-icons/gr";

const ModalDetails = (props) => {
  console.log(props.fetchResults);
  console.log(props.pickedElement);

  const candidate = props.fetchResults[1].find(
    (e) => props.pickedElement.candidateId == e.id
  );
  console.log(candidate);

  return (
    <div className="ModalContainer">
      <div className="ModalDetails">
        <div className="nameModal">
          <h2>Modal Details</h2>
          <button className="pointer" onClick={() => props.setShowModal(false)}>
            <GrClose />
          </button>
        </div>
        <div className="img">
          <img src={candidate.avatar} alt="asd" />
          <div className="nameMail">
            <p>Name</p>
            <h3>{candidate.name}</h3>
            <p>Email</p>
            <h3>{candidate.email}</h3>
          </div>
        </div>
        <div className="details">
          <p>Company</p>
          <h3>{props.pickedElement.companyName}</h3>
          <p>Interview Date</p>
          <h3>
            {moment(props.pickedElement.interviewDate).format("DD.MM.YYYY")}
          </h3>
          <p>Phase</p>
          <h3>{props.pickedElement.phase}</h3>
          <p>Status</p>
          <h3>{props.pickedElement.status}</h3>
        </div>
        <div className="notes">
          <p>Notes</p>
          <p>{props.pickedElement.note}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
