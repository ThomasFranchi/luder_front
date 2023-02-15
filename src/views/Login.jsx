import { useState } from "react";
import Input from "../components/Input";

function Register() {
  // Set UseState for USER / ERRORMESSAGE / SUCCESSMESSAGE
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setsuccessMessage] = useState(null);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password} = user;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(email, password),
    };
    const result = await fetch ("http://127.0.0.1:3001/register", options)
  }

  return (
    <div>
      <h3>Se connecter</h3>
      <form onSubmit={handleSubmit}>
        
        <Input
          name="email"
          label="email"
          onChange={handleChange}
          value={user.email}
          required= "true"
        />
        <Input
          name="password"
          label="Mot de passe"
          onChange={handleChange}
          value={user.password}
          type="password"
          required= "true"
        />
        
        <button>Me connecter</button>
      </form>
    </div>
  );
}

export default Register;
