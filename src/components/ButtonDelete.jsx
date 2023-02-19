import { useNavigate } from "react-router-dom";

function ButtonDelete({ gameId, gameOrSession }) {
  const navigate = useNavigate();

  async function deleteGameOrSession() {
    // Fetch options
    let options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Post data to DB on /login routes
    const result = await fetch(
      `http://127.0.0.1:3001/${gameOrSession}/${gameId}`,
      options
    );
    // Response from DB on /login routes
    const data = await result.json();
    navigate(`/${gameOrSession}`);
  }

  return <button onClick={deleteGameOrSession}>Supprimer</button>;
}

export default ButtonDelete;
