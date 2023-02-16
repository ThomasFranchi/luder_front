import { useState } from "react";
import Input from "../components/Input";
import "./style/Games.css"
import GamesList from "../components/GamesList"

 function Games() {

      // Set UseState for USER / ERRORMESSAGE / SUCCESSMESSAGE

    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setsuccessMessage] = useState(null);
  
    return (
        <div>
            <h1>Liste des jeux</h1>
            <GamesList />
        </div>
    )
}


export default Games;
