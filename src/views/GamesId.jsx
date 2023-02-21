import { useEffect, useState } from "react";
import Input from "../components/Input";
import "./style/listViews.css"
import GamesList from "../components/GamesList";
import { Routes, Route, useParams } from "react-router-dom";
import ButtonDelete from "../components/ButtonDelete";
import Button from "../components/atoms/Button"
import GameEdit from "../components/GameEdit"
import Sidebar from "../components/sideBar";
import Footer from "../components/organisms/Footer";
import SectionModule from "../components/organisms/SectionModule";

function GamesId() {
  //get gamesID from params (URL /:gameId)
  const { gameId } = useParams();

    const [editIsClicked,setEditIsClicked] = useState(false)

  const [gameDetail, setGameDetail] = useState({
    title: "",
    editor: "",
    edition: "",
    releaseDate: "",
    language: "",
    minPlayers: "",
    maxPlayers: "",
    minRecommendedAge: "",
    averageDuration: "",
  });

  // Load the first time
  useEffect(() => {
    getGameId();
  }, []);

  // Set UseState for USER / ERRORMESSAGE / SUCCESSMESSAGE
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setsuccessMessage] = useState(null);

  // get the json game collection from DB
  async function getGameId() {
        // get token from localStorage
        const token = localStorage.getItem("token");
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: "bearer " + token },
    };
    const result = await fetch(
      `http://127.0.0.1:3001/games/${gameId}`,
      options
    );
    let data = await result.json();
    if (data !== null) {
    setGameDetail(data);}
  }


  return (


    <div className="mainContainer">
    <div className="mainContainer-left">
      <Sidebar />
    </div>
    <div className="mainContainer-right">
    <div className="page-container yellow">
    <h1 className="pageTitle">Ludotèque</h1>
    <SectionModule title="Fiche de jeu">
          {gameDetail.title === "" && <p>Ce jeu n'existe pas !</p> }
      
      {gameDetail.title !== "" &&  
      <div>      <h1>{gameDetail.title}</h1>
      <p> Titre : {gameDetail.title}</p>
      <p> Editeur : {gameDetail.editor}</p>
      <p> Edition : {gameDetail.edition}</p>
      <p> Année de sortie : {gameDetail.releaseDate}</p>
      <p> Langue : {gameDetail.language}</p>
      <p> Nombre de joueur mini : {gameDetail.minPlayers}</p>
      <p> Nombre de joueur maxi : {gameDetail.maxPlayers}</p>
      <p> Durée moyenne : {gameDetail.averageDuration}</p>
      <button onClick={() => setEditIsClicked(!editIsClicked)}>Modifier les infos du jeu</button>
      <ButtonDelete gameOrSession="games" gameId={gameId}/>
      {/* <Button subClassName="button button-post">Ajouter un jeu</Button>
      <Button subClassName="button button-delete">retirer un jeu</Button> */}
      
      { editIsClicked && < GameEdit gameId={gameId}/>}
      
    </div>  
  }  
  </SectionModule>
  <Footer />
    </div>
  </div>
  </div>

  );
}

export default GamesId;
