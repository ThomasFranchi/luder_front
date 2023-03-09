import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import "./style/login.css";
import { UserConnect } from "../App";

function Login() {

  const {setUserLog} = useContext(UserConnect)
 const navigate = useNavigate()

  // Set UseState for USER / ERRORMESSAGE / SUCCESSMESSAGE
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setsuccessMessage] = useState(null);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = user;
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    // Post data to DB on /login routes
    const result = await fetch("http://127.0.0.1:3001/login", options);
    // Response from DB on /login routes
    const data = await result.json();
    

    // retreive token
    console.log(data.message);
    const token = data.token;
    if (data.success) {
      setsuccessMessage(data.message);
      navigate("/sessions")
      setUserLog(data.user)

    } else if (!data.success) {
      setErrorMessage(data.message);
    }

    // Stock Token into LocalStorage
    localStorage.setItem("token", token);
  }




  return (
    <div className="flip-card-login">
      <div className="flip-card-inner-login">
        <div className="flip-card-front-login">
          <h3>Se connecter</h3>
          <form onSubmit={handleSubmit}>
            <Input
              name="email"
              label="email"
              onChange={handleChange}
              value={user.email}
              required={true}
            />
            <Input
              name="password"
              label="Mot de passe"
              onChange={handleChange}
              value={user.password}
              type="password"
              required={true}
            />
            <button className="btnhome">Me connecter</button>
          </form>
          <p>{errorMessage}</p>
          <p>{successMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
