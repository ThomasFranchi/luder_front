
// import CurrentUseProfil from './CurrentUserProfile'
// import Logout from "./Logout"

import { useState, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import  "./style/sidebar.css"
import logo from "../img/dessin.png"
import Avatar from "../img/avatar.png"
import "../components/atoms/style/atomsStyle.css"
import Button from "./atoms/Button";
import logout from "./Logout"
import { UserConnect } from "../App";
function Sidebar() {

    const {setUserLog, userLog} = useContext(UserConnect)
    const navigate = useNavigate()
    const [playerDetail, setPlayerDetail] = useState({
        nickName: "",
        firstName: "",
        lastName: ""
      });

  // Load the first time
//   useEffect(() => {
//     getPlayerMe();
//   }, []);

  // Set UseState for USER / ERRORMESSAGE / SUCCESSMESSAGE
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setsuccessMessage] = useState(null);

  // get the json player collection from DB
  // NO NEED Anymore because we use the userLog.nickname instead.
//   async function getPlayerMe() {
//     const token = localStorage.getItem("token");
//     const options = {
//       method: "GET",
//       headers: { "Content-Type": "application/json", Authorization: "bearer " + token},
//     };
//     const result = await fetch(
//       `http://127.0.0.1:3001/players/me`,
//       options
//     );
//     let data = await result.json();
//     if (data !== null) {
//       setPlayerDetail(data);
//     }
//   }

 function logout() {
    localStorage.setItem("token", "");
    setUserLog(null);
    navigate("/")
  }


    return (
        <nav className="sidebar">
                <ul>
                <Link to="/"> <img src={logo} alt="Logo" className="logoSideBar"/></Link>

                    <li className="sideBar-li-avatar"> <img src={Avatar} className="avatar" alt="Avatar"/> 
                    <Link to="/PlayerIdMe" className="link">{userLog?.nickName}</Link>
          
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
                    <li> 
                        <Button onClick={logout} subClassName="button">Se déconnecter</Button>
                    </li>
                </ul>
        </nav>
    )
};

export default Sidebar;