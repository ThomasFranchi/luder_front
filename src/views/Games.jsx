import { useState } from "react";
import "./style/listViews.css";
import GamesList from "../components/GamesList";
import Game from "../components/Game";
import GetGameSelection from "../components/GameSelection";
import SectionModule from "../components/organisms/SectionModule";
import GamePost from "../components/GamePost";
import Footer from "../components/organisms/Footer";
import GamesListMe from "../components/GamesListMe";

import Sidebar from "../components/sideBar";

function Games() {
  // Set UseState for USER / ERRORMESSAGE / SUCCESSMESSAGE


  
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setsuccessMessage] = useState(null);

  async function getUserInfo() {

    // get token from localStorage
    const token = localStorage.getItem("token");

    /* Configuration de la requÃªte */
    const options = {
      method: "GET",
      headers: {
        Authorization: "bearer " + token,
      },
    };
    console.log(options);
    const response = await fetch("http://localhost:3001/games", options);
    const data = await response.json();
    console.log("data  from front", data);
  }




  /// METTRE DANNS UN USEEFFECT
  
  getUserInfo();

  return (
    <div className="mainContainer">
      <div className="mainContainer-left">
        <Sidebar />
      </div>
      <div className="mainContainer-right">
        <div className="page-container yellow">
          <h1 className="pageTitle">Ludotèque</h1>
          <div className="page">
          
          <SectionModule title="Mes jeux">  <GamesListMe /> </SectionModule>
          <SectionModule title="Ajouter un jeu">  <GamePost /> </SectionModule>
          <SectionModule title="Tous les jeux">  <GamesList /> </SectionModule>
          </div>
          <Footer />
        </div>
      
      </div>
    </div>
  );
}

export default Games;
