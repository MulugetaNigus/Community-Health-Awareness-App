import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = {
    isDarkMode,
    colors: isDarkMode ? {
      background: '#121212',
      surface: '#1E1E1E',
      text: '#FFFFFF',
      primary: '#BB86FC',
      border: '#2C2C2C',
      icon: '#FFFFFF',
    } : {
      background: '#F5F5F5',
      surface: '#FFFFFF',
      text: '#000000',
      primary: '#007AFF',
      border: '#DDDDDD',
      icon: '#000000',
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 