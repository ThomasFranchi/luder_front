import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const Register = lazy(() => import("./views/Register"));
const Login = lazy(() => import("./views/Login"));
const Sessions = lazy(() => import("./views/Sessions"));
const Games = lazy(() => import("./views/Games"));
const Home = lazy(() => import("./views/Home"));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense >
       <Home />
      </Suspense>
    ),
  },

  {
    path: "/register",
    element: (
      <Suspense >
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense >
        <Login />
      </Suspense>
    ),
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
