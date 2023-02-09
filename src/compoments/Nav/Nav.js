import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = (props) => {
  const { navOpen } = props;
  const navLinkClass = ({ isActive }) => {
    return isActive ? "nav nav-active" : "nav";
  };

  return (
    <div className={`nav ${navOpen ? "nav-open" : null}`}>
      <div className="nav-middle">
        <NavLink className="nav-box" to="/">
          <p className="nav-box-title">
            <i className="fa-solid fa-house"></i>
          </p>
          <p className="nav-box-name">Home</p>
        </NavLink>
        <NavLink className="nav-box" to="/blog">
          <p className="nav-box-title">
            <i className="fa-solid fa-book nav-box-title"></i>
          </p>
          <p className="nav-box-name">Blog</p>
        </NavLink>
        <NavLink className="nav-box" to="/contact">
          <p className="nav-box-title">
            <i className="fa-solid fa-message nav-box-title"></i>
          </p>
          <p className="nav-box-name">Contact</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
