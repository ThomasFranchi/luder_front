import { useState } from "react";
import { Link } from "react-router-dom";

function Player({
  _id,
  firstName,
  lastName,
  age,
  nickName,
  sessionPlayed,
  sessionHosted,

}) {
  return (
    <div>
      <div className="playerArray">
        <div className="arrayCell"> <Link to={`/players/${_id}`} className="link">{nickName}</Link> </div>
        <div className="arrayCell">{firstName}</div>
        <div className="arrayCell">{lastName}</div>
        <div className="arrayCell">{age}</div>
        <div className="arrayCell">{sessionPlayed}</div>
        <div className="arrayCell">{sessionHosted}</div>
        <Link to={`/players/${_id}`} className="link"><button> détails</button></Link> 
   
      </div>
    </div>
  );
}

export default Player;

