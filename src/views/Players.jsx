import { useState } from "react";
import Input from "../components/Input";
import "./style/listViews.css";
import PlayersList from "../components/PlayersList";
import Sidebar from "../components/sideBar";
import SectionModule from "../components/organisms/SectionModule";
import Player from "../components/Player";
function Players({children}) {
  // Set UseState for USER / ERRORMESSAGE / SUCCESSMESSAGE

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setsuccessMessage] = useState(null);

  async function getUserInfo() {
    const token = localStorage.getItem("token");

    /* Configuration de la requÃªte */
    const options = {
      method: "GET",
      headers: {
        Authorization: "bearer " + token,
      },
    };
    console.log(options);
    const response = await fetch("http://localhost:3001/players", options);
    const data = await response.json();
  }

  getUserInfo();

  return (
    <div className="mainContainer">
      <div className="mainContainer-left">
        <Sidebar />
      </div>
      <div className="mainContainer-right">
        <div className="page-container green">
          <h1 className="pageTitle">Joueurs</h1>
          <div className="page">
        
            <div>  
            <SectionModule title="">
              <Player/>
            </SectionModule>
            <SectionModule title="Amis">
              <PlayersList/>
            </SectionModule>
            <SectionModule  title="Tous les joueurs">
              <PlayersList/>
            </SectionModule>

              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Players;
