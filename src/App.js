import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, useParams} from "react-router-dom";
import "./App.css";


const Sessions = lazy(() => import("./views/Sessions"));
const Games = lazy(() => import("./views/Games"));
const GamesId = lazy(() => import("./views/GamesId"));
const Home = lazy(() => import("./views/Home"));
const Error = lazy(() => import("./views/Error"));
const Players = lazy(() => import("./views/Players"));
const PlayerId = lazy(() => import("./views/PlayerId"));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense >
       <Home />
      </Suspense>
    ),
    errorElement : <Error />
  },


  {
    path: "/sessions",
    element: (
      <Suspense >
        <Sessions />
      </Suspense>
    ),
  },
  {
    path: "/games",
    element: (
      <Suspense >
        <Games />
      </Suspense>
    ),
  },
  {
    path: "/games/:gameId",
    element: (
      <Suspense >
        <GamesId />
      </Suspense>
    ),
  },

  {
    path: "/players",
    element: (
      <Suspense >
        <Players />
      </Suspense>
    ),
  },
  {
    path: "/players/:playerId",
    element: (
      <Suspense >
        <PlayerId />
      </Suspense>
    ),
  },




  <a href="https://www.flaticon.com/free-icons/dice" title="dice icons">Dice icons created by bearicons - Flaticon</a>

]);

function App() {
  return (
    <div className="App">  
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
