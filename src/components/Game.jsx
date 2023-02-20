import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./atoms/Button";

function Game({
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
}) {
  return (
    <div>
      <div className="gameArray">
        <div className="flex-row nbColumn6"> <Link to={`/games/${_id}`} className="link">{title}</Link> </div>
        <div className="flex-row nbColumn6">{editor}</div>
        {/* <div className="arrayCell">{edition}</div>
        <div className="arrayCell">{releaseDate}</div> */}
        <div className="flex-row nbColumn6">{language}</div>
        <div className="flex-row nbColumn6">{minPlayers}</div>
        <div className="flex-row nbColumn6">{maxPlayers}</div>
        {/* <div className="arrayCell">{minRecommendedAge}</div> */}
        <div className="flex-row nbColumn6">{averageDuration}</div>
        <Link to={`/games/${_id}`} className="link">    <Button subClassName="button button-get">Détails</Button></Link> 
        <Link to={`/games/${_id}`} className="link">    <Button subClassName="button button-get">Ajouter</Button></Link> 

      </div>
    </div>
  );
}

export default Game;
