import { useState, useEffect } from "react";

function GetGameSelection() {
  // Get List of GAMES to Generate the SELECTION OPTION
  const [games, setGames] = useState();

  // Load the first time
  useEffect(() => {
    getGamesList();
  }, []);

  // get the json game collection from DB
  async function getGamesList() {
    const token = localStorage.getItem("token");

    const options = {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
      Authorization: "bearer " + token },
    };
    console.log("options GAME SELECTION", options)
    console.log("token GAME SELECTION", token)

    const result = await fetch("http://127.0.0.1:3001/games", options);
    let data = await result.json();

    // check is the const Data is an Array
    if (Array.isArray(data)) {
      setGames(data.sort((a, b) => a.title > b.title));
    }
  }

  return (
    <div>
      <label for="sessionGame">Jeu de la partie :</label>
      <select name="sessionGame" id="sessionGame">
        {/* <option value="test">{games[0].title}</option> */}
        {games !== undefined &&
          games.map((game) => {
            return <option value="">{game.title}</option>;
          })}
      </select>
    </div>
  );
}

export default GetGameSelection;
