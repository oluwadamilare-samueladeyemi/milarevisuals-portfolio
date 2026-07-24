import "./ThemeToggle.css";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { isDarkMode, handleThemeToggle } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={handleThemeToggle}
      aria-label="Toggle theme"
    >
      {isDarkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;