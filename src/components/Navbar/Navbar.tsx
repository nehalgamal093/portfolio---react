import "./navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <NavLink className="nav-style" to="/">
          Nehal Gamal
        </NavLink>
      </div>

      <nav className="nav-list">
        <NavLink className="nav-style" to="/">
          Home
        </NavLink>
        <NavLink className="nav-style" to="projects">
          Projects
        </NavLink>
        <NavLink className="nav-style" to="google-play">
          Google Play
        </NavLink>
        <NavLink className="nav-style" to="certificates">
          Certificates
        </NavLink>
        <NavLink className="nav-style" to="contact-me">
          Contact me
        </NavLink>
      </nav>
    </div>
  );
};
