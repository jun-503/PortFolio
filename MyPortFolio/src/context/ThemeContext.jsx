import { useState,useEffect,createContext} from 'react';



const ThemeContext = createContext();
const ThemeProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);
  const toggleTheme = () => setIsDarkTheme(prevTheme => !prevTheme);

  return (
    <ThemeContext.Provider value={{isDarkTheme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  );
};

export {ThemeProvider,ThemeContext};
