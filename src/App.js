import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Component/Footer/Footer";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import Wizard from "./Pages/Wizard/Wizard";
import Title from "./Component/Title/Title";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  const [company, setCompany] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [pickedElement, setPickedElement] = useState();
  const [showLog, setShowLog] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(localStorage.getItem("accessToken"));
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3333/api/companies`)
      .then((res) => res.json())
      .then((res) => setCompany(res));

    fetch(`http://localhost:3333/api/candidates`)
      .then((res) => res.json())

      .then((res) =>
        setCandidates(
          res.map((e, i) => {
            return {
              ...e,
              avatar: `https://randomuser.me/api/portraits/men/${i}.jpg`,
            };
          })
        )
      );

    fetch(`http://localhost:3333/api/reports`)
      .then((res) => res.json())
      .then((res) => setReports(res));
  }, [reload]);

  const allFetchResults = [company, candidates, reports];
  console.log(allFetchResults);

  if (company && candidates && reports)
    return (
      <div className="App">
        <Header
          fetchResults={allFetchResults}
          setShowLog={setShowLog}
          showLog={showLog}
          setIsLogin={setIsLogin}
          isLogin={isLogin}
        />
        <Title isLogin={isLogin} setShowLog={setShowLog} />
        <Switch>
          <Route exact path="/">
            <HomePage
              setShowLog={setShowLog}
              showLog={showLog}
              fetchResults={allFetchResults}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          </Route>
          <Route path="/detailsPage/:id">
            <DetailsPage
              fetchResults={allFetchResults}
              pickedElement={pickedElement}
              setPickedElement={setPickedElement}
              setShowModal={setShowModal}
              showModal={showModal}
              reports={reports}
              setReports={setReports}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              setShowLog={setShowLog}
              showLog={showLog}
            />
          </Route>
          <Route path="/adminPage">
            {isLogin != "undefined" && isLogin != null ? (
              <AdminPage
                setPickedElement={setPickedElement}
                pickedElement={pickedElement}
                reload={reload}
                setReload={setReload}
                fetchResults={allFetchResults}
                setShowModal={setShowModal}
                showModal={showModal}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/wizard">
            {/* <Wizard fetchResults={allFetchResults} /> */}
            {isLogin != "undefined" && isLogin != null ? (
              <Wizard
                setReload={setReload}
                reload={reload}
                fetchResults={allFetchResults}
                isLogin={isLogin}
              />
            ) : (
              <Redirect to="/" />
            )}

            {/* <Wizard fetchResults={allFetchResults} /> */}
          </Route>
        </Switch>

        <Footer />
      </div>
    );
  return null;
}

export default App;
