import { useState } from "react";
import Button from "./atoms/Button";
import { Link } from "react-router-dom";

function Session({
    sessionDate,
    sessionName,
    sessionDescription,
    availableSpots,
    onLine,
    local,
    mixed,
    lat,
    lon,
}) {
  return (
    <div>
      <div className="sessionArray">
        <div className="arrayCell">{sessionDate} </div>
        <div className="arrayCell">{sessionName}</div>
        <div className="arrayCell">{sessionDescription}</div>
        <div className="arrayCell"> Places disponibles : {availableSpots}</div>
        <div className="arrayCell">{onLine}</div>
        <div className="arrayCell">{local}</div>
        <div className="arrayCell">{mixed}</div>
        <div className="arrayCell">{lat}</div>
        <div className="arrayCell">{lon}</div>
        <div className="arrayCell">
          {" "}
          <button> </button>{" "}
         
    <Button subClassName="button button-put">Modifier</Button>
    <Button subClassName="button button-delete">Supprimer</Button>
        </div>
      </div>
    </div>
  );
}

export default Session;
