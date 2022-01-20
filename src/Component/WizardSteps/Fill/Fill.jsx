import moment from "moment";
import React, { useState } from "react";
import "./Fill.scss";
import { useHistory } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";

const Fill = (props) => {
  const [interviewDate, setInterviewDate] = useState("");
  const [note, setNote] = useState("");
  const [phase, setPhase] = useState("CV");
  const [status, setStatus] = useState("Passed");
  console.log(interviewDate);

  const history = useHistory();

  const token = props.isLogin;

  return (
    <div className="Fill">
      <div className="input">
        <label for="phase">
          Date:
          <input
            className="pointer"
            id="phase"
            required
            type="date"
            onChange={(e) => setInterviewDate(e.target.value)}
            max={moment().format("YYYY-MM-DD")}
          ></input>
        </label>
        <label for="Phase">
          Phase
          <select
            className="pointer"
            name="Phase"
            id="Phase"
            onChange={(e) => setPhase(e.target.value)}
          >
            <option value="CV">CV</option>
            <option value="HR">HR</option>
            <option value="Technical">Technical</option>
          </select>
        </label>
        <label for="status">
          Status
          <select
            className="pointer"
            name="status"
            id="status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Passed">Passed</option>
            <option value="Declined">Declined</option>
          </select>
        </label>
      </div>
      <div className="text">
        <label for="notes">
          <h2>Notes</h2>
          <textarea
            name=""
            id="notes"
            cols="30"
            rows="10"
            placeholder="Type at least 20 charaters..."
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <div className="btnwiz3 pointer">
            <button
              className="btnwiz pointer"
              onClick={() => props.setPageWiz(props.pageWiz - 1)}
            >
              <FaArrowCircleLeft />
            </button>
            <button
              className="btnwiz"
              disabled={interviewDate === "" || note.length < 20}
              type="button"
              onClick={() => {
                fetch(`http://localhost:3333/api/reports`, {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify({
                    candidateId: props.selectedCandidate.id,
                    candidateName: props.selectedCandidate.name,
                    companyId: props.selectedCompany.id,
                    companyName: props.selectedCompany.name,
                    interviewDate: interviewDate,
                    note: note,
                    phase: phase,
                    status: status,
                  }),
                }).then((res) => {
                  console.log(res);
                  console.log(token);
                  props.setReload(!props.reload);
                  history.push("/adminPage");
                });
              }}
            >
              <IoMdPersonAdd />
            </button>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Fill;
