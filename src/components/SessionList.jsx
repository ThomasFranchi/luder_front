
import { useState, useEffect } from "react";
import Session from "./Session";

function SessionsList() {
  const [sessions, setSessions] = useState([]);

  // Load the first time
  useEffect(() => {
    getSessionsList();
  }, []);

  // get the json game collection from DB
  async function getSessionsList() {
    const options = {method: 'GET',
         headers: {'Content-Type': 'application/json'}, 
        };
    const result = await fetch("http://127.0.0.1:3001/sessions", options);
    let data = await result.json();
    console.log(data)

    // check is the const Data is an Array
    if (Array.isArray(data)) {
        setSessions(data);
      console.log("SESSIONS",sessions)
    } };

    return (
        <div>

        <button onClick={getSessionsList}>Rafraichir la liste des sessions</button>
          {sessions.map((session) => (
            <Session {...session} />
          ))}
        </div>
      );
 
}

export default SessionsList;







