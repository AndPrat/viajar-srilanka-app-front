import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import { iconLogout, iconNewPlace, iconPlaces } from "../../utils/icons";

const NavigationBar = (): React.ReactElement => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__place">
          <NavLink to="/lugares" className="navigation__link">
            {iconPlaces} Ver lugares
          </NavLink>
        </li>
        <li className="navigation__place">
          <NavLink to="/añadir-lugar" className="navigation__link">
            {iconNewPlace}
            Añadir lugar
          </NavLink>
        </li>
        <li className="navigation__place">
          <NavLink to="/cerrar-sesion" className="navigation__link">
            {iconLogout}
            Cerrar sesión
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
