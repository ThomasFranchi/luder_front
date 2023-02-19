import { useState, useEffect } from "react";
import Game from "./Game";
import "../components/organisms/style/organimsStyle.css"
function GamesList() {
  const [games, setGames] = useState([]);

  // Load the first time
  useEffect(() => {
    getGamesList();
  }, []);

  // get the json game collection from DB
  async function getGamesList() {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const result = await fetch("http://127.0.0.1:3001/games", options);
    let data = await result.json();
    console.log(data);

    // check is the const Data is an Array
    if (Array.isArray(data)) {
      setGames(data);
      console.log("GAMES", games);
    }
  }

  return (
    <div>
      <div class="table-container" role="table" aria-label="Destinations">
        <div class="flex-table header" role="rowgroup">
          <div class="flex-row first" role="columnheader">
            Jeu
          </div>
          <div class="flex-row" role="columnheader">
            Events
          </div>
          <div class="flex-row" role="columnheader">
            Nb min.
          </div>
          <div class="flex-row" role="columnheader">
          Nb max.
          </div>
          <div class="flex-row" role="columnheader">
          Durée
          </div>
          <div class="flex-row" role="columnheader">
          Status
          </div>


        </div>
      </div>

      <button onClick={getGamesList}>rafraichir la liste</button>
      {games.map((game) => (
        <Game {...game} />
      ))}
    </div>
  );
}

export default GamesList;
