import Input from "./Input";
import SessionList from "./SessionList"
import GetGameSelection from "./GameSelection"
import { useState, useEffect } from "react";


function SessionPost() {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [status, setStatus] = useState(null);

  const [newSession, setNewSession] = useState({
    sessionGame: "",
    sessionDate: "",
    sessionName: "",
    //sessionOwner
    sessionDescription: "",
    availableSpots: "",
    onLine: "",
    local: "",
    mixed: "",
    lat: "",
    lon: "",
    onlineLocation: "",
    sessionStatus: "",
    likesTODO: "",
    // schema Players for register User
    nickName: "",
    userId: "",
    // schema Post
    postAuthor: "",
    postAuthorId: "",
    postPublicationDate: "",
    postContent: "",
    postLikes: "",
  });
 
  // ERREUR Ne prend qu'une coord LONGITUDE // remplace la clé LON ou LAT par ""

  // ERREUR CHECKBOX NE RENVOIR PAS DE VALEUR

   async function getLocation()  {
       if (!navigator.geolocation) {
            setStatus("La geolocation n'est pas supporté par votre navigateur");
       } else {
            setStatus("Localisation de votre position...");
            await navigator.geolocation.getCurrentPosition((position) => {
                 setStatus(null);
                 setLatitude(position.coords.latitude);
                 setLongitude(position.coords.longitude);
                 console.log(latitude, longitude)
                  setNewSession({...newSession, [newSession.lon]: position.coords.longitude})
                  setNewSession({...newSession, [newSession.lat]: position.coords.latitude})
                 console.log(newSession)
            }
            // ,
            //  () => {
            //      setStatus('Impossible de définir votre position');
                 
            // }
            );
       }
  }



  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function handleChange(e) {
    setNewSession({ ...newSession, [e.target.name]: e.target.value });
  }

  console.log(newSession);
  // Submit input to DB to create a new session
  async function handleSubmit(e) {
    e.preventDefault();

    const {
        sessionGame,
        sessionDate,
        sessionName,
        //sessionOwner
        sessionDescription,
        availableSpots,
        onLine,
        local,
        mixed,
        lat,
        lon,
        onlineLocation,
        sessionStatus,
        likesTODO,
        // schema Players for register User
        nickName,
        userId,
        // schema Post
        postAuthor,
        postAuthorId,
        postPublicationDate,
        postContent,
        postLikes,
    } = newSession;

    const token = localStorage.getItem("token");

    // Fetch options
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      },
      body: JSON.stringify(newSession),
    };

    // Post data to DB on /login routes
    const result = await fetch("http://127.0.0.1:3001/sessions", options);
    // Response from DB on /login routes
    const data = await result.json();

    if (!data.success) {
        setSuccessMessage(null);
        setErrorMessage(data.message);
        return;
      }
  
      setSuccessMessage("Your account has been created");
      setErrorMessage(null);
    //   setNewSession({    title: "",
    //   editor: "",
    //   edition: "",
    //   releaseDate: 2023,
    //   language: "Français",
    //   minPlayers: "1",
    //   maxPlayers: "1",
    //   minRecommendedAge: "12",
    //   averageDuration: 60, });
  }

  return (
    <div>
      <h3>Créez votre nouvelle partie</h3>
      <form onSubmit={handleSubmit}>

      <GetGameSelection />


        <Input
          name="sessionGame"
          label="Jeu"
          onChange={handleChange}
          value={newSession.sessionGame}
          required={true}
        />
        <Input
          name="sessionDate"
          label="Date de la partie"
          onChange={handleChange}
          value={newSession.sessionDate}
          required={true}
          type="date"
        />
        <Input
          name="sessionName"
          label="Nom de la partie"
          onChange={handleChange}
          value={newSession.sessionName}
          required={true}
        />
        <Input
          name="sessionDescription"
          label="Description"
          onChange={handleChange}
          value={newSession.sessionDescription}
          required={true}
        />
        <Input
          name="availableSpots"
          label="Nombre de places disponibles"
          onChange={handleChange}
          value={newSession.availableSpots}
          required={true}
          type="number"
        />
        <Input
          name="onLine"
          label="Partie en ligne"
          onChange={handleChange}
          // value={newSession.onLine}
          value="onLine"
          type="checkbox"
          required={false}
        />
        <Input
          name="local"
          label="Partie physique"
          onChange={handleChange}
          value={newSession.local}
          type="checkbox"
          required={false}
        />


        {/* <Input
          name="minRecommendedAge"
          label="Age minimal"
          onChange={handleChange}
          value={newSession.minRecommendedAge}
          required={true}
          type="number"
        /> */}
        {/* <Input
          name="lat"
          label="Durée moyenne d'une partie"
          onChange={handleChange}
          value={newSession.lat}
          required={true}
          type="number"
        /> */}

        <Input
          name="onlineLocation"
          label="Quel logiciel pour conférence "
          onChange={handleChange}
          value={newSession.onlineLocation}
          required={true}
        />
        <button>Créer votre session</button>
        <button onClick={getLocation}>Me localiser</button>
        {status !== null && <p> {status}</p>}
        {errorMessage !== null && <p>Erreur: {errorMessage}</p>}
      {successMessage !== null && <p>{successMessage}</p>}
      </form>
    </div>
  );
}

export default SessionPost;
