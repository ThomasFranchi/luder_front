import Input from "./Input";
import GamesList from "./GamesList"
import { useState, useEffect } from "react";


function GameEdit({gameId}) {
  const [game, setGame] = useState({})
  
  const [editGame, setEditGame] = useState({
    title: "",
    editor: "",
    edition: "",
    releaseDate: 2023,
    language: "Français",
    minPlayers: "1",
    maxPlayers: "1",
    minRecommendedAge: "12",
    averageDuration: 60,
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function handleChange(e) {
    setEditGame({ ...editGame, [e.target.name]: e.target.value });
  }

  
  useEffect(() => {
    getGamesList();
  }, []);


    // get the json game collection from DB
    async function getGamesList() {
      const token = localStorage.getItem("token");

      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json",  Authorization: "bearer " + token },
      };
      const result = await fetch(`http://127.0.0.1:3001/games/${gameId}`, options);
      let data = await result.json();
      setEditGame(data)
      console.log(data);
    }
  
  
  
  // Submit input to DB to Modify an existing Game
  async function handleSubmit(e) {
    e.preventDefault();

    const {
      title,
      editor,
      edition,
      releaseDate,
      language,
      minPlayers,
      maxPlayers,
      minRecommendedAge,
      averageDuration,
    } = editGame;

    const token = localStorage.getItem("token");

    // Fetch options
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      },
      body: JSON.stringify(editGame),
    };

    // Post data to DB on /login routes
    const result = await fetch(`http://127.0.0.1:3001/games/${gameId}`, options);
    // Response from DB on /login routes
    const data = await result.json();
 
    if (!data.success) {
        setSuccessMessage(null);
        setErrorMessage(data.message);
        return;
      }
      setSuccessMessage(data.message);
      setErrorMessage(null);
      
  }

  return (
    <div>
      <h3>Modifier les informations du jeux</h3>
      <form onSubmit={handleSubmit}>
        <Input
          name="title"
          label="Titre du jeu"
          onChange={handleChange}
          value={editGame.title}
          required={true}
        />
        <Input
          name="editor"
          label="Editeur"
          onChange={handleChange}
          value={editGame.editor}
          required={true}
        />
        <Input
          name="edition"
          label="Edition"
          onChange={handleChange}
          value={editGame.edition}
          required={true}
        />
        <Input
          name="releaseDate"
          label="Année de sortie"
          onChange={handleChange}
          value={editGame.releaseDate}
          required={true}
          type="number"
        />
        <Input
          name="language"
          label="Langue"
          onChange={handleChange}
          value={editGame.language}
          required={true}
        />
        <Input
          name="minPlayers"
          label="Nombre de joueur(s) minimal"
          onChange={handleChange}
          value={editGame.minPlayers}
          required={true}
          type="number"
        />
        <Input
          name="maxPlayers"
          label="Nombre de joueur(s) maximal"
          onChange={handleChange}
          value={editGame.maxPlayers}
          required={true}
          type="number"
        />
        <Input
          name="minRecommendedAge"
          label="Age minimal"
          onChange={handleChange}
          value={editGame.minRecommendedAge}
          required={true}
          type="number"
        />
        <Input
          name="averageDuration"
          label="Durée moyenne d'une partie"
          onChange={handleChange}
          value={editGame.averageDuration}
          required={true}
          type="number"
        />

        <button>Modifier les informations</button>

        {errorMessage !== null && <p>Erreur: {errorMessage}</p>}
      {successMessage !== null && <p>{successMessage}</p>}
      </form>
    </div>
  );
}

export default GameEdit;
