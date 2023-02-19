import { useState } from "react";
import Input from "../components/Input";
import "./style/listViews.css"
import PlayersList from "../components/PlayersList"
import Sidebar from "../components/sideBar";

 function Players() {
   // Set UseState for USER / ERRORMESSAGE / SUCCESSMESSAGE

   const [errorMessage, setErrorMessage] = useState(null);
   const [successMessage, setsuccessMessage] = useState(null);

   async function getUserInfo() {
     const token = localStorage.getItem("token");

     /* Configuration de la requÃªte */
     const options = {
       method: "GET",
       headers: {
         Authorization: "bearer " + token,
       },
     };
     console.log(options);
     const response = await fetch("http://localhost:3001/players", options);
     const data = await response.json();
   }

   getUserInfo();

   return (
     <div className="mainContainer">
       <div className="left">
         <Sidebar />
       </div>
       <div className="right">
         <h1>Liste des  joueurs inscrits</h1>
         <PlayersList />
       </div>
     </div>
   );
 }


export default Players;
