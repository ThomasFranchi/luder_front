import Login from '../views/Login';
import Register from '../views/Register';
import logo from '../img/dessin.png'



function Home() {

return (
  <header className="App-header">
    <img src={logo} alt="Logo" />
    <div className="welcome">
    
      <Login />
      <Register />
    </div>
  </header>
);
}

export default Home;
