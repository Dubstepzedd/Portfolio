import React, { createContext, useContext, useState } from "react";

// Create the context
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default to "light" theme

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the context
export const useTheme = () => useContext(ThemeContext);
