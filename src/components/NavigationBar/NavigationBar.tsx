import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./NavigationBar.css";
import { iconLogout, iconNewPlace, iconPlaces } from "../../icons/icons";
import { auth } from "../../firebase";
import Button from "../Button/Button";
import paths from "../../routers/paths/paths";

const NavigationBar = (): React.ReactElement => {
  const { pathname } = useLocation();

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
            <li>
              <NavLink
                to="/places"
                className={
                  pathname === paths.places
                    ? "navigation__link"
                    : "navigation__link__inactive"
                }
              >
                {iconPlaces} Ver lugares
              </NavLink>
            </li>
            <li>
              <NavLink to="/new-place" className="navigation__link">
                {iconNewPlace}
                Nuevo lugar
              </NavLink>
            </li>
            <li>
              <Button className="navigation__link" onClick={logout}>
                {iconLogout} Cerrar sesión
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavigationBar;
