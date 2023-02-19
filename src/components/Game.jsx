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
        <div className="arrayCell"> <Link to={`/games/${_id}`} className="link">{title}</Link> </div>
        <div className="arrayCell">{editor}</div>
        <div className="arrayCell">{edition}</div>
        <div className="arrayCell">{releaseDate}</div>
        <div className="arrayCell">{language}</div>
        <div className="arrayCell">{minPlayers}</div>
        <div className="arrayCell">{maxPlayers}</div>
        <div className="arrayCell">{minRecommendedAge}</div>
        <div className="arrayCell">{averageDuration}</div>
        <Link to={`/games/${_id}`} className="link">    <Button subClassName="button button-get">Détails</Button></Link> 


      </div>
    </div>
  );
}

export default Game;
