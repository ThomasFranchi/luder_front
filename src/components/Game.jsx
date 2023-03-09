import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./atoms/Button";

function Game({setGames,...props}) {

  const  {
    _id,
    title,
    editor,
    edition,
    releaseDate,
    language,
    minPlayers,
    maxPlayers,
    minRecommendedAge,
    averageDuration,
  } = props;

  async function addGameCollection() {
    const token = localStorage.getItem("token");
console.log(props)
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
      body: JSON.stringify(props),
    };
    const result = await fetch(
      "http://127.0.0.1:3001/players/me/gamesCollection",
      options
    );
    let data = await result.json();

    // check is the const Data is an Array
    if (Array.isArray(data)) {
      setGames(data);
    }
  }

  return (
    <div>
      <div className="gameArray">
        <div className="flex-row nbColumn6">
          {" "}
          <Link to={`/games/${_id}`} className="link">
            {title}
          </Link>{" "}
        </div>
        <div className="flex-row nbColumn6">{editor}</div>
        {/* <div className="arrayCell">{edition}</div>
        <div className="arrayCell">{releaseDate}</div> */}
        <div className="flex-row nbColumn6">{language}</div>
        <div className="flex-row nbColumn6">{minPlayers}</div>
        <div className="flex-row nbColumn6">{maxPlayers}</div>
        {/* <div className="arrayCell">{minRecommendedAge}</div> */}
        <div className="flex-row nbColumn6">{averageDuration}</div>
        <Link to={`/games/${_id}`} className="link">
          {" "}
          <Button subClassName="button button-get">Détails</Button>
        </Link>
        {/* <Link  className="link"> */}
    
          <Button subClassName="button button-get" onClick={addGameCollection}>Ajouter</Button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Game;
