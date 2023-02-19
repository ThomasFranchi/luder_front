import logo from "../img/404.png"
import "./style/error.css"
import { Link } from "react-router-dom";
import Home from "./Home"

function Error () {

    return (

        <div className="errorContainer">
            <h1> Cette page n'existe pas !</h1>
            <img src={logo} alt="Logo" className="errorImg" />
            Vous êtes perdu ? <Link to="/" className="link">Accueil</Link>
        </div>
    )
}

export default Error;