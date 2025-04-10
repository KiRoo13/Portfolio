import { useWindowSize } from "../../helpers/useWindowSize";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonBurger from "../ButtonBurger/ButtonBurger";
import Nav from "../Nav/Nav";
import "./Header.css";

function Header() {
  const [width] = useWindowSize();
  const [flagMenu, setFlagMenu] = useState(false);

  const openAndCloseMenu = () => {
    setFlagMenu((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="conteiner">
        <div className="header-content">
          <div className="header-logo">
            <NavLink className="link" to={"/"}>
              Rodionov
            </NavLink>
          </div>
          <nav className="header-nav">
            {width < 600 ? <ButtonBurger handle={openAndCloseMenu}/> : <Nav />}
          </nav>
          {flagMenu && width < 600 && (
            <div className="mob-menu">
              <Nav flagMenu={flagMenu} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
