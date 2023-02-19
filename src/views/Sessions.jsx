import { useState, useEffect } from "react";
import Input from "../components/Input";
import SessionsList from "../components/SessionList";
import Sidebar from "../components/sideBar";
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
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <h1>Liste des Sessions</h1>
        <SessionsList />
      </div>
    </div>
  );
}

export default Sessions;