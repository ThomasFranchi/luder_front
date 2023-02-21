import Input from "./Input";
import GamesList from "./GamesList"
import { useState, useEffect } from "react";


function PlayerEdit({playerId}) {
  const [player, setGame] = useState({})
  
  const [editPlayer, setEditGame] = useState({
    firstName: "",
      lastName: "",
      nickName: "",
      email: "",
      password: "",
      age: "",
    
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function handleChange(e) {
    setEditGame({ ...editPlayer, [e.target.name]: e.target.value });
  }

  
  useEffect(() => {
    getGamesList();
  }, []);


    // get the json player collection from DB
    async function getGamesList() {
      const token = localStorage.getItem("token");

      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json",  Authorization: "bearer " + token },
      };
      const result = await fetch(`http://127.0.0.1:3001/players/${playerId}`, options);
      let data = await result.json();
      setEditGame(data)
      console.log(data);
    }
  
  
  
  // Submit input to DB to Modify an existing Game
  async function handleSubmit(e) {
    e.preventDefault();

    const {
      firstName,
      lastName,
      nickName,
      email,
      password,
      age,
    } = editPlayer;

    const token = localStorage.getItem("token");

    // Fetch options
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      },
      body: JSON.stringify(editPlayer),
    };

    // Post data to DB on /login routes
    const result = await fetch(`http://127.0.0.1:3001/players/${playerId}`, options);
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
          name="firstName"
          label="Prénom"
          onChange={handleChange}
          value={editPlayer.firstName}
          required={true}
        />
        <Input
          name="lastName"
          label="Nom"
          onChange={handleChange}
          value={editPlayer.lastName}
          required={true}
        />
           <Input
              name="email"
              label="email"
              onChange={handleChange}
              value={editPlayer.email}
              required={true}
            />
        {/* <Input
          name="password"
          label="Mot de passe"
          onChange={handleChange}
          value={editPlayer.password}
          required={true}
          type="password"
        /> */}
        <Input
          name="nickName"
          label="Pseudo"
          onChange={handleChange}
          value={editPlayer.nickName}
          required={true}
        />
        <Input
          name="age"
          label="Age"
          onChange={handleChange}
          value={editPlayer.age}
          required={true}
          type="number"
        />



        <button>Modifier les informations</button>

        {errorMessage !== null && <p>{errorMessage}</p>}
      {successMessage !== null && <p>{successMessage}</p>}
      </form>
    </div>
  );
}

export default PlayerEdit;
