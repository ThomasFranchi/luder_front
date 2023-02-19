
// import CurrentUseProfil from './CurrentUserProfile'
// import Logout from "./Logout"
import { Link } from "react-router-dom";
import  "./style/sidebar.css"
import logo from "../img/dessin.png"


function Sidebar() {
    return (
        <nav className="sidebar">
            <img src={logo} alt="Logo" className="logoSideBar"/>
                <ul>
                    <li> Nom du joueur
                     {/* <CurrentUseProfil /> */}
                    </li>
              
                    <li>
                    <Link to="/sessions" className="link">Parties</Link>
                    </li>
                    <li>
                    <Link to="/games" className="link">Jeux</Link>
                    </li>
                    <li>
                    <Link to="/players" className="link">Joueurs</Link>
                    </li>
                    <li> Se déconnecter
                    {/* <Logout /> */}
                    </li>
                </ul>
       
        </nav>
    )
};

export default Sidebar;