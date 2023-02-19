import Input from "./Input";
import GamesList from "./GamesList"
import Button from "../components/atoms/Button";
const { useState } = require("react");

function GamePost() {
  const [newGame, setNewGame] = useState({
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
    setNewGame({ ...newGame, [e.target.name]: e.target.value });
  }

  console.log(newGame);
  // Submit input to DB to create a new Game
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
    } = newGame;

    // Fetch options
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame),
    };

    // Post data to DB on /login routes
    const result = await fetch("http://127.0.0.1:3001/games", options);
    // Response from DB on /login routes
    const data = await result.json();

    if (!data.success) {
        setSuccessMessage(null);
        setErrorMessage(data.message);
        return;
      }
  
      setSuccessMessage(data.message);
      setErrorMessage(null);
      setNewGame({    title: "",
      editor: "",
      edition: "",
      releaseDate: 2023,
      language: "Français",
      minPlayers: "1",
      maxPlayers: "1",
      minRecommendedAge: "12",
      averageDuration: 60, });
  }

  return (
    <div>
      <h3>Ajouter un jeu à la liste</h3>
      <form onSubmit={handleSubmit}>
        <Input
          name="title"
          label="Titre du jeu"
          onChange={handleChange}
          value={newGame.title}
          required={true}
        />
        <Input
          name="editor"
          label="Editeur"
          onChange={handleChange}
          value={newGame.editor}
          required={true}
        />
        <Input
          name="edition"
          label="Edition"
          onChange={handleChange}
          value={newGame.edition}
          required={true}
        />
        <Input
          name="releaseDate"
          label="Année de sortie"
          onChange={handleChange}
          value={newGame.releaseDate}
          required={true}
          type="number"
        />
        <Input
          name="language"
          label="Langue"
          onChange={handleChange}
          value={newGame.language}
          required={true}
        />
        <Input
          name="minPlayers"
          label="Nombre de joueur(s) minimal"
          onChange={handleChange}
          value={newGame.minPlayers}
          required={true}
          type="number"
        />
        <Input
          name="maxPlayers"
          label="Nombre de joueur(s) maximal"
          onChange={handleChange}
          value={newGame.maxPlayers}
          required={true}
          type="number"
        />
        <Input
          name="minRecommendedAge"
          label="Age minimal"
          onChange={handleChange}
          value={newGame.minRecommendedAge}
          required={true}
          type="number"
        />
        <Input
          name="averageDuration"
          label="Durée moyenne d'une partie"
          onChange={handleChange}
          value={newGame.averageDuration}
          required={true}
          type="number"
        />

        <button>Ajouter le jeu</button>
        <Button subClassName=" button button-post" >  Ajouter le jeu </Button>

        {errorMessage !== null && <p>Erreur: {errorMessage}</p>}
      {successMessage !== null && <p>{successMessage}</p>}
      </form>
    </div>
  );
}

export default GamePost;
