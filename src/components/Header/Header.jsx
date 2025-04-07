import { NavLink } from "react-router-dom";
import logo from '../../img/logo.png'
import "./Header.css";
import ButtonThem from "../ButtonThem/ButtonThem";

function Header() {
  const activeClass = (isActive) => {
    return isActive ? "active-link" : "link";
  };

  return (
    <header className="header">
      <div className="conteiner">
        <div className="header-content">
          <div className="header-logo">
            <NavLink to={"/"}>
              Rodionov
            </NavLink>
          </div>
          <nav className="header-nav">
            <ul>
              <li className="list-item">
                <NavLink
                  className={({ isActive }) => activeClass(isActive)}
                  to={"/"}
                >
                  HOME
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink
                  className={({ isActive }) => activeClass(isActive)}
                  to={"/projects"}
                >
                  PROJECTS
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink
                  className={({ isActive }) => activeClass(isActive)}
                  to={"/contacts"}
                >
                  CONTACTS
                </NavLink>
              </li>
            </ul>
          </nav>
          <ButtonThem/>
        </div>
      </div>
    </header>
  );
}

export default Header;
