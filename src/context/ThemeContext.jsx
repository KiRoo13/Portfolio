import { createContext, useContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";


const ThemeContext = createContext(null);


export function ThemContextProvider({ children }) {

const [theme, setThem] = useLocalStorage('theme', 'dark')

  return (
    <ThemeContext.Provider value={[theme, setThem]}>
        {children}
    </ThemeContext.Provider>
  );
}


export function useThemeContext () {
   return useContext(ThemeContext)
}