import { useState } from "react";
import Input from "../components/Input";

function Register() {
  // Set UseState for USER / ERRORMESSAGE / SUCCESSMESSAGE
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    nickName: "",
    age: 0,
    address1: "",
    address2: "",
    zipCode: "",
    city: "",
    country: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setsuccessMessage] = useState(null);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // const {firstName, lastName, email, password, nickName, age, address1, address2, zipCode, city, country} = user;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
    };
    const result = await fetch ("http://127.0.0.1:3001/register", options)
  }

  return (
    <div>
      <h3>S'inscrire</h3>
      <form onSubmit={handleSubmit}>
        <Input
          name="firstName"
          label="Prénom"
          onChange={handleChange}
          value={user.firstname}
          required= "true"
        />
        <Input
          name="lastName"
          label="Nom"
          onChange={handleChange}
          value={user.lastname}
          required= "true"
        />
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
        <Input
          name="nickName"
          label="Pseudo"
          onChange={handleChange}
          value={user.nickName}
          required= "true"
        />
        <Input
          name="age"
          label="Age"
          onChange={handleChange}
          value={user.age}
          type="number"
        />
        <Input
          name="address1"
          label="adresse"
          onChange={handleChange}
          value={user.address1}
        />
        <Input
          name="address2"
          label="adresse"
          onChange={handleChange}
          value={user.address2}
        />
        <Input
          name="zipCode"
          label="Code Postal"
          onChange={handleChange}
          value={user.zipCode}
        />
        <Input
          name="city"
          label="Ville"
          onChange={handleChange}
          value={user.city}
        />
        <Input
          name="country"
          label="Pays"
          onChange={handleChange}
          value={user.country}
        />

        <button>M'inscrire</button>
      </form>
    </div>
  );
}

export default Register;
