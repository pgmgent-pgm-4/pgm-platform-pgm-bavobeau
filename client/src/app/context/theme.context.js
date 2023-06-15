import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = (isDarkMode) => {
    setIsDarkMode(isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{isDarkMode, handleThemeChange}}>
      {children}
    </ThemeContext.Provider>
  )
};

export {
  ThemeContext,
  ThemeProvider,
  useThemeContext
};