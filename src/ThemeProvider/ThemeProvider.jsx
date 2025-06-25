import React, { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';



export const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};
