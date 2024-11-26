import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = {
    isDarkMode,
    colors: isDarkMode ? {
      background: '#121212',
      surface: '#1E1E1E',
      text: '#FFFFFF',
      primary: '#BB86FC',
      secondary: '#03DAC6',
      border: '#333333',
    } : {
      background: '#FFFFFF',
      surface: '#F5F5F5',
      text: '#000000',
      primary: '#6200EE',
      secondary: '#03DAC6',
      border: '#E0E0E0',
    },
    toggleTheme: () => setIsDarkMode(prev => !prev),
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
