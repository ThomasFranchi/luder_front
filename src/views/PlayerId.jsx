import { useEffect, useState } from "react";
import Input from "../components/Input";
import "./style/listViews.css"
import PlayersList from "../components/PlayersList";
import { Routes, Route, useParams } from "react-router-dom";
import ButtonDelete from "../components/ButtonDelete"
// import PlayerEdit from "../components/PlayerEdit"
import Sidebar from "../components/sideBar";

function PlayersId() {
  //get playersID from params (URL /:playerId)
  const { playerId } = useParams();

    const [editIsClicked,setEditIsClicked] = useState(false)

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
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const result = await fetch(
      `http://127.0.0.1:3001/players/${playerId}`,
      options
    );
    let data = await result.json();
    if (data !== null) {
    setPlayerDetail(data);}
  }


  return (
    <div className="mainContainer">
    <div className="mainContainer-left">
      <Sidebar />
    </div>
    <div className="mainContainer-right">
          {playerDetail.title === "" && <p>Ce jeu n'existe pas !</p> }
      {playerDetail.title !== "" &&  
      <div>      <h1>Fiche de {playerDetail.nickName} </h1>
      <p> Pseudo : {playerDetail.nickName}</p>
      <p> Prénom : {playerDetail.firstName}</p>
      <p> Nom : {playerDetail.lastName}</p>
      <p> Email : {playerDetail.email}</p>
      <p> Age: {playerDetail.age}</p>
      <p> Nombre de partie hébergées : {playerDetail.sessionHosted}</p>
      <p> Nombre de partie jouées : {playerDetail.sessionPlayed}</p>
      <button onClick={() => setEditIsClicked(!editIsClicked)}>Modifier les infos du joueur</button>
      <ButtonDelete playerOrSession="players" gameId={playerId}/>
      
      {/* { editIsClicked && < PlayerEdit playerId={playerId}/>} */}
    </div>
  }  
    </div>
  </div>










  );
}

export default PlayersId;
