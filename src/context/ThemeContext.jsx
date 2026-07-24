import { createContext, useContext, useEffect, useState } from "react";

// Create a context that will hold our theme values.
const ThemeContext = createContext();

// This component wraps the entire app and provides theme data.
export function ThemeProvider({ children }) {
  // Read the saved theme from localStorage.
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  // Toggle between dark and light mode.
  function handleThemeToggle() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  // Save the user's choice and update the body class.
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));

    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        handleThemeToggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to access the theme anywhere in the app.
export function useTheme() {
  return useContext(ThemeContext);
}