import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>Milare Visuals</h2>
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/projects">Projects</NavLink>

        <NavLink to="/experience">Experience</NavLink>

        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;