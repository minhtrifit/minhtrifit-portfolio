import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = (props) => {
  const { navOpen } = props;
  const navLinkClass = ({ isActive }) => {
    return isActive ? "nav-box active" : "nav-box";
  };

  return (
    <div className={`nav ${navOpen ? "nav-open" : null}`}>
      <div className="nav-top">
        <Link className="nav-avatar" to="/about">
          <img src="../../img/avatar.png" alt="avatar" />
        </Link>
        <div className="nav-links">
          <a href="https://www.facebook.com/minhtrifit" target="blank">
            <i className="fa-brands fa-facebook nav-links-icon"></i>
          </a>
          <a href="https://github.com/minhtrifit" target="blank">
            <i className="fa-brands fa-github nav-links-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lê-minh-trí-89ab94215"
            target="blank"
          >
            <i className="fa-brands fa-linkedin nav-links-icon"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC76ICSmHFRLTmDQeFxHdUJA"
            target="blank"
          >
            <i className="fa-brands fa-youtube nav-links-icon"></i>
          </a>
          <a href="https://www.instagram.com/_lm.tri_" target="blank">
            <i className="fa-brands fa-square-instagram nav-links-icon"></i>
          </a>
        </div>
      </div>
      <div className="nav-middle">
        <NavLink className={navLinkClass} to="/">
          <i className="fa-solid fa-house nav-icon"></i>
          <p className="nav-text">Home</p>
        </NavLink>
        <NavLink className={navLinkClass} to="/blog">
          <i className="fa-solid fa-book nav-icon"></i>
          <p className="nav-text">Blog</p>
        </NavLink>
        <NavLink className={navLinkClass} to="/about">
          <i className="fa-solid fa-user nav-icon"></i>
          <p className="nav-text">About</p>
        </NavLink>
        <NavLink className={navLinkClass} to="/contact">
          <i className="fa-solid fa-message nav-icon"></i>
          <p className="nav-text">Contact</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
