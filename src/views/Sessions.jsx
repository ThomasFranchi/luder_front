import { useState, useEffect } from "react";
import Input from "../components/Input";
import SessionsList from "../components/SessionList";
import SessionPost from "../components/SessionPost";
import Session from "../components/Session";
import Sidebar from "../components/sideBar";
import SectionModule from "../components/organisms/SectionModule";
import "./style/sessions.css"



function Sessions() {
  const [sessionsSearch, setSessionsSearch] = useState([]);

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setsuccessMessage] = useState(null);

  async function getSessionsList(e) {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    const result = await fetch("http://127.0.0.1:3001/sessions", options);
    let data = await result.json();
    console.log(data);
    setSessionsSearch(data);
  }

  return (
    <div className="mainContainer">
      <div className="mainContainer-left">
        <Sidebar />
      </div>
      <div className="mainContainer-right">
      <div className="page-container red">
        <h1 className="pageTitle">Parties / Sessions</h1>
        <div className="page">
        <SectionModule title="Ma Partie"><Session /></SectionModule> 
        <SectionModule title="Toutes mes Parties"><Session /></SectionModule> 
        <SectionModule title="Crée une partie"><SessionPost /></SectionModule> 
        <SectionModule title="Toutes les parties"><SessionsList /></SectionModule> 
       
        </div>
        </div>
      </div>
    </div>
  );
}

export default Sessions;
