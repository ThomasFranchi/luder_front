import { useState, useEffect } from "react";
import Player from "./Player";

function PlayersList({children}) {
  const [players, setPlayers] = useState([]);

  // Load the first time
  useEffect(() => {
    getPlayersList();
  }, []);

  // get the json game collection from DB
  async function getPlayersList() {
    const options = {method: 'GET',
         headers: {'Content-Type': 'application/json'}, 
        };
    const result = await fetch("http://127.0.0.1:3001/players", options);
    let data = await result.json();
    console.log(data)

    // check is the const Data is an Array
    if (Array.isArray(data)) {
      setPlayers(data);
      console.log("JOUEURS",players)
    } };

    return (
        <div>
            <h1>Joueurs</h1>{children}
        <button onClick={getPlayersList}>rafraichir la liste</button>
          {players.map((player) => (
            <Player {...player} />
          ))}
 
        </div>
      );
}

export default PlayersList;