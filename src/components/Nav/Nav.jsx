import { NavLink } from "react-router-dom";
import ButtonThem from "../ButtonThem/ButtonThem";
import "./Nav.css";

function Nav({ flagMenu }) {
  const activeClass = (isActive) => {
   if (isActive) {
      return "active-link"
   } else if (!isActive && flagMenu) {
      return "mob-link"
   } else {
       return "link"
   }
  };

  const toggleClass = () => {
    return flagMenu && "mob-list";
  };

  return (
    <>
      <ul className={toggleClass()}>
        <li className="list-item">
          <NavLink className={({ isActive }) => activeClass(isActive)} to={"/"}>
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
      <ButtonThem />
    </>
  );
}

export default Nav;
