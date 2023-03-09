import { lazy, Suspense, createContext, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./views/style/views.css";

const Sessions = lazy(() => import("./views/Sessions"));
const Games = lazy(() => import("./views/Games"));
const GamesId = lazy(() => import("./views/GamesId"));
const Home = lazy(() => import("./views/Home"));
const Error = lazy(() => import("./views/Error"));
const Players = lazy(() => import("./views/Players"));
const PlayerId = lazy(() => import("./views/PlayerId"));
const PlayerIdMe = lazy(() => import("./views/PlayerIdMe"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
    errorElement: <Error />,
  },

  {
    path: "/sessions",
    element: (
      <Suspense>
        <Sessions />
      </Suspense>
    ),
  },
  {
    path: "/games",
    element: (
      <Suspense>
        <Games />
      </Suspense>
    ),
  },
  {
    path: "/games/:gameId",
    element: (
      <Suspense>
        <GamesId />
      </Suspense>
    ),
  },

  {
    path: "/players",
    element: (
      <Suspense>
        <Players />
      </Suspense>
    ),
  },
  {
    path: "/players/:playerId",
    element: (
      <Suspense>
        <PlayerId />
      </Suspense>
    ),
  },
  {
    path: "/playerIdMe",
    element: (
      <Suspense>
        <PlayerIdMe />
      </Suspense>
    ),
  },
]);

//Export context
export const UserConnect = createContext();

function App() {
  useEffect(() => {
    getUser();
  }, []);

  const [userLog, setUserLog] = useState(null);
  async function getUser() {
    const token = localStorage.getItem("token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
    };
    const result = await fetch(`http://127.0.0.1:3001/players/me`, options);
    let data = await result.json();
    if (data !== null) {
      setUserLog(data);
    }
  }

  return (
    <div className="App">
      <UserConnect.Provider value={{ userLog, setUserLog, getUser }}>
        <RouterProvider router={router} />
      </UserConnect.Provider>
    </div>
  );
}

export default App;
