import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-middle">
        <NavLink className="nav-box" to="/">
          <i className="fa-solid fa-house"></i>
          <p>Home</p>
        </NavLink>
        <NavLink className="nav-box" to="/blog">
          <i className="fa-solid fa-book"></i>
          <p>Blog</p>
        </NavLink>
        <NavLink className="nav-box" to="/contact">
          <i className="fa-solid fa-message"></i>
          <p>Contact</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
