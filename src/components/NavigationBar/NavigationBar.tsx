import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./NavigationBar.css";
import { iconLogout, iconNewPlace, iconPlaces } from "../../utils/icons";
import { auth } from "../../firebase";

const NavigationBar = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/home");
  };

  return (
    <>
      {user && (
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__place">
              <NavLink to="/lugares" className="navigation__link">
                {iconPlaces} Ver lugares
              </NavLink>
            </li>
            <li className="navigation__place">
              <NavLink to="/nuevo-lugar" className="navigation__link">
                {iconNewPlace}
                Nuevo lugar
              </NavLink>
            </li>
            <li className="navigation__place">
              <NavLink
                to="/cerrar-sesión"
                className="navigation__link"
                onClick={logout}
              >
                {iconLogout}
                Cerrar sesión
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavigationBar;
