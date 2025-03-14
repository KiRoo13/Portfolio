import { useEffect } from "react";
import "./ButtonThem.css";
import { useThemeContext } from "../../context/ThemeContext";

function ButtonThem() {

const [theme, setThem] = useThemeContext()

const toggleTheme = () => {
   setThem((prev)=> prev === 'light' ? 'dark' : 'light')
}

useEffect(()=> {
   document.body.dataset.theme = theme
}, [theme])

  return (
    <div>
      <div className="theme-switcher">
        <input onClick={toggleTheme} type="checkbox" id="theme-toggle" />
        <label className="toggle-label"></label>
      </div>
    </div>
  );
}

export default ButtonThem;
