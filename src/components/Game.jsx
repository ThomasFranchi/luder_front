import { useState } from "react";

function Game({
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
        <div className="arrayCell">{title} </div>
        <div className="arrayCell">{editor}</div>
        <div className="arrayCell">{edition}</div>
        <div className="arrayCell">{releaseDate}</div>
        <div className="arrayCell">{language}</div>
        <div className="arrayCell">{minPlayers}</div>
        <div className="arrayCell">{maxPlayers}</div>
        <div className="arrayCell">{minRecommendedAge}</div>
        <div className="arrayCell">{averageDuration}</div>
        <button> </button>
      </div>
    </div>
  );
}

export default Game;
