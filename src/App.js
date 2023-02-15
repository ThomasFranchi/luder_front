import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const Register = lazy(() => import("./views/Register"));
const Login = lazy(() => import("./views/Login"));



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense >
       
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
  <a href="https://www.flaticon.com/free-icons/dice" title="dice icons">Dice icons created by bearicons - Flaticon</a>

]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="welcome">
      <Login />
       <Register />
      </div>
      </header>
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
