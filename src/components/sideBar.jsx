
// import CurrentUseProfil from './CurrentUserProfile'
// import Logout from "./Logout"
import { Link } from "react-router-dom";
import  "./style/sidebar.css"
import logo from "../img/dessin.png"
import Avatar from "../img/avatar.png"
import "../components/atoms/style/atomsStyle.css"

function Sidebar() {
    return (
        <nav className="sidebar">
                <ul>
                <Link to="/"> <img src={logo} alt="Logo" className="logoSideBar"/></Link>

                    <li className="sideBar-li-avatar">   <img src={Avatar} className="avatar"  alt="Avatar"/> 
                    <Link to="/players" className="link">Thomas</Link>
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