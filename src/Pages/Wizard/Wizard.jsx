import React, { useState } from "react";
import "./Wizard.scss";
import Fill from "../../Component/WizardSteps/Fill/Fill";
import SelectedCard from "../../Component/WizardSteps/SelectCard/SelectCard";
import SelectCompany from "../../Component/WizardSteps/SelectCompany/SelectCompany";

const Wizard = (props) => {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [pageWiz, setPageWiz] = useState(0);
  const [searchWiz, setSearchWiz] = useState("");
  return (
    <div className="Wizard">
      <div className="left">
        <div className="stage">
          {pageWiz === 0 ? (
            <p style={{ color: "#05a081" }}>
              <span style={{ borderColor: "#05a081" }}>1</span>
              Select Candidate
            </p>
          ) : (
            <p>
              <span>1</span>Select Candidate
            </p>
          )}
          {pageWiz === 1 ? (
            <p style={{ color: "#05a081" }}>
              <span style={{ borderColor: "#05a081" }}>2</span>
              Select Company
            </p>
          ) : (
            <p>
              <span>2</span>Select Company
            </p>
          )}
          {pageWiz === 2 ? (
            <p style={{ color: "#05a081" }}>
              <span style={{ borderColor: "#05a081" }}>3</span>
              Fill Report Details
            </p>
          ) : (
            <p>
              <span>3</span>Fill Report Details
            </p>
          )}
        </div>
        <div className="picked">
          {pageWiz >= 1 && (
            <>
              <p>Selected Candidate</p>
              <h2>{selectedCandidate.name}</h2>
            </>
          )}
          {pageWiz >= 2 && (
            <>
              <p>Selected Company</p>
              <h2>{selectedCompany.name}</h2>
            </>
          )}
        </div>
      </div>
      <div className="right">
        {pageWiz === 0 && (
          <SelectedCard
            setPageWiz={setPageWiz}
            fetchResults={props.fetchResults}
            selectedCandidate={selectedCandidate}
            setSelectedCandidate={setSelectedCandidate}
            pageWiz={pageWiz}
            searchWiz={searchWiz}
            setSearchWiz={setSearchWiz}
          />
        )}
        {pageWiz === 1 && (
          <SelectCompany
            setPageWiz={setPageWiz}
            fetchResults={props.fetchResults}
            setSelectedCompany={setSelectedCompany}
            selectedCompany={selectedCompany}
            pageWiz={pageWiz}
            searchWiz={searchWiz}
            setSearchWiz={setSearchWiz}
          />
        )}

        {pageWiz === 2 && (
          <Fill
            setPageWiz={setPageWiz}
            reload={props.reload}
            setReload={props.setReload}
            isLogin={props.isLogin}
            selectedCandidate={selectedCandidate}
            selectedCompany={selectedCompany}
            pageWiz={pageWiz}
          />
        )}
      </div>
    </div>
  );
};

export default Wizard;
