import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/milare-visuals-brand-logo.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Milare Visuals Logo" />
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/projects">Projects</NavLink>

        <NavLink to="/experience">Experience</NavLink>

        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <ThemeToggle />
    </header>
  );

    const { isDarkMode } = useTheme();

  return (
    <header className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      {/* Existing navbar content */}
    </header>
  );
}


export default Navbar;
