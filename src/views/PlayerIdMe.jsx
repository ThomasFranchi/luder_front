import { useEffect, useState, } from "react";
import Input from "../components/Input";
import "./style/listViews.css";
import PlayersList from "../components/PlayersList";
import { Routes, Route, useParams } from "react-router-dom";
import ButtonDelete from "../components/ButtonDelete";
import PlayerEdit from "../components/PlayerEdit"
import Sidebar from "../components/sideBar";
import SectionModule from "../components/organisms/SectionModule";
import Button from "../components/atoms/Button";
import GamesListMe from "../components/GamesListMe";


function PlayersIdMe() {

  //get playersID from params (URL /:playerId)
  const { playerId } = useParams();
  const [editIsClicked, setEditIsClicked] = useState(false);
  const [playerDetail, setPlayerDetail] = useState({
    nickName: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gameCollection: "",
    sessionHosted: "",
    sessionPlayed: "",
  });

  // Load the first time
  useEffect(() => {
    getPlayerId();
  }, []);

  // Set UseState for USER / ERRORMESSAGE / SUCCESSMESSAGE
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setsuccessMessage] = useState(null);

  // get the json player collection from DB
  async function getPlayerId() {
    const token = localStorage.getItem("token");
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: "bearer " + token},
    };
    const result = await fetch(
      `http://127.0.0.1:3001/players/me`,
      options
    );
    let data = await result.json();
    if (data !== null) {
      setPlayerDetail(data);
    }
  }

  return (
    <div className="mainContainer">
      <div className="mainContainer-left">
        <Sidebar />
      </div>

      <div className="mainContainer-right">
      <div className="page-container green">
          <h1 className="pageTitle">{playerDetail.nickName}</h1>
          <div className="page">
        <SectionModule title={`Fiche de ${playerDetail.nickName}`}>
        {playerDetail.title === "" && <p>Ce jeu n'existe pas !</p>}
        {playerDetail.title !== "" && (
          <div>
            <h1> {playerDetail.nickName} </h1>
            <p> Pseudo : {playerDetail.nickName}</p>
            <p> Prénom : {playerDetail.firstName}</p>
            <p> Nom : {playerDetail.lastName}</p>
            <p> Email : {playerDetail.email}</p>
            <p> Age: {playerDetail.age}</p>
            <p> Nombre de partie hébergées : {playerDetail.sessionHosted}</p>
            <p> Nombre de partie jouées : {playerDetail.sessionPlayed}</p>
            <button onClick={() => setEditIsClicked(!editIsClicked)}>
              Modifier les infos du joueur
            </button>
            <ButtonDelete gameOrSession="players" gameId={playerId} />
             { editIsClicked && < PlayerEdit playerId={playerId}/>}
            {/* <Button subClassName="button button-put">Modifier</Button>*/}
      <Button subClassName="button button-delete">supprimer mon compte</Button> 

          </div>
          
        )}

        </SectionModule>
        <SectionModule title="Mes jeux">  <GamesListMe /> </SectionModule>

      </div>
      </div>
      </div>
    </div>
  );
}

export default  PlayersIdMe;
