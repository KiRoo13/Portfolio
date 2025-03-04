import { useEffect } from "react";
import "./ButtonThem.css";
import { useLocalStorage } from "../../utils/useLocalStorage";

function ButtonThem() {

const [theme, setThem] = useLocalStorage('theme', 'light')

const toggleTheme = () => {
   setThem((prev)=> prev === 'light' ? 'dark' : 'light')
}

useEffect(()=> {
   document.body.dataset.theme = theme
}, [theme])

  return (
    <div>
      <div className="theme-switcher">
        <input onChange={toggleTheme} type="checkbox" id="theme-toggle" />
        <label className="toggle-label"></label>
      </div>
    </div>
  );
}

export default ButtonThem;
