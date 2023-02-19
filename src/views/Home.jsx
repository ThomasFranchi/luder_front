
import Login from '../components/Login';
import Register from '../components/Register';
import logo from '../img/dessin.png'
import { useState } from 'react';
import "./style/home.css"



function Home() {

const [isConnected, setIsConnected] = useState(false);

async function getUserInfo() {
  const token = localStorage.getItem("token");

  /* Configuration de la requÃªte */
  const options = {
    method: "GET",
    headers: {
      Authorization: "bearer " + token,
    },
  };

  const response = await fetch("http://localhost:3001/register", options);
  const data = await response.json()
  console.log("data from front", data)

}

getUserInfo()

return (
  <header className="App-header">
    <img src={logo} alt="Logo" className='logoHome' />
    <div className="welcome">
    
      <div className='login'><Login /></div>
      <div className='register'><Register /></div>
    </div>
  </header>
);
}

export default Home;
