import { useState } from "react";
// import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./compoments/Nav/Nav";
import MyRoutes from "./compoments/MyRoutes/MyRoutes";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const handleOpenNav = () => {
    setNavOpen(!navOpen);
    console.log(navOpen);
  };
  return (
    <div className="app">
      <Nav navOpen={navOpen} />
      <i
        className="fa-solid fa-bars nav-menu-icon"
        onClick={(e) => handleOpenNav()}
      ></i>
      <MyRoutes />
    </div>
  );
}

export default App;
