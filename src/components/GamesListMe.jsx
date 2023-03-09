import { useState, useEffect } from "react";
import Game from "./Game";
import "../components/organisms/style/organimsStyle.css"


function GamesListMe() {
  const [games, setGames] = useState([]);

  // Load the first time
  useEffect(() => {
    getGamesList();
  }, []);

  // get the json game collection from DB
  async function getGamesList() {
    const token = localStorage.getItem("token");

    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json", 
      Authorization: "bearer " + token },
    };
    const result = await fetch("http://127.0.0.1:3001/players/me/gamesCollection", options);
    let data = await result.json();
    console.log(data)
    // check is the const Data is an Array
    if (Array.isArray(data)) {
      setGames(data);
    }
  }







  return (
    <div>
        <button onClick={getGamesList}>rafraichir la liste</button>
      <div class="table-container" role="table" aria-label="Destinations">
        <div class="flex-table header" role="rowgroup">
          <div class="flex-row nbColumn6  " role="columnheader">
            Jeu
          </div>
          <div class="flex-row nbColumn6 " role="columnheader">
            Editeur
          </div>
          <div class="flex-row nbColumn6 " role="columnheader">
            Langue
          </div>
          <div class="flex-row nbColumn6 fixed" role="columnheader">
            Nb min.
          </div>
          <div class="flex-row nbColumn6 fixed" role="columnheader">
          Nb max.
          </div>
          <div class="flex-row nbColumn6 fixed" role="columnheader">
          Durée
          </div>
          <div class="flex-row nbColumn6 " role="columnheader">
          </div>

        </div>
      </div>

    
      {games.map((game) => (
        <Game {...game} setGames={setGames} />
      ))}
    </div>
  );
}

export default GamesListMe;
