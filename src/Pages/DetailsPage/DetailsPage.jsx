import React, { useState, useEffect } from "react";
import "./DetailsPage.scss";
import ModalDetails from "../../Component/ModalDetails/ModalDetails";
import ReportRow from "../../Component/ReportRow/ReportRow";
import { useParams } from "react-router-dom";
import ModalLog from "../../Component/ModalLog/ModalLog";
import moment from "moment";

const DetailsPage = (props) => {
  useEffect(() => {
    props.setShowModal(false);
  }, []);
  let { id } = useParams();

  let candidate = props.fetchResults[1].find((e) => {
    return e.id == id;
  });
  if (candidate)
    return (
      <>
        <div className="candidateCardContainer">
          <div className="CandidateCards">
            <div className="Candidateimage">
              <img src={candidate.avatar} alt="pera" />
            </div>

            <div className="Candidateinfo">
              <div>
                <p> Name: </p>
                <h2>{candidate.name}</h2>
              </div>
              <div>
                <p> Email: </p>
                <h2>{candidate.email}</h2>
              </div>

              <div>
                <p>Date of Birth:</p>
                <h2>{moment(candidate.birthday).format("DD.MM.YYYY")}</h2>
              </div>
              <div>
                <p>Education:</p>
                <h2>{candidate.education}</h2>
              </div>
            </div>
          </div>
          <h3 className="rep">Reports</h3>
          <div className="CandidateTable">
            <table>
              <tr className="tr-tabela">
                <th>Company</th>
                <th>Interview Date</th>
                <th>Status</th>
              </tr>
              {props.fetchResults[2]
                .filter((e) => {
                  return e.candidateId === candidate.id;
                })
                .map((e) => (
                  <ReportRow
                    e={e}
                    setShowModal={props.setShowModal}
                    showModal={props.showModal}
                    setPickedElement={props.setPickedElement}
                  />
                ))}
            </table>
          </div>
        </div>
        {props.showLog && (
          <ModalLog
            isLogin={props.isLogin}
            setIsLogin={props.setIsLogin}
            setShowLog={props.setShowLog}
            showLog={props.showLog}
            clickedButton={props.clickedButton}
          />
        )}

        {props.showModal && (
          <ModalDetails
            fetchResults={props.fetchResults}
            candidate={candidate}
            setShowModal={props.setShowModal}
            pickedElement={props.pickedElement}
          />
        )}
      </>
    );
  else return null;
};

export default DetailsPage;
