import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Header = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <header className="header">
          <div className="header__logo">
            <img
              src="/img/logo-viajarSriLanka.png"
              alt="Viajar a Sri Lanka logo"
              width="32"
              height="32"
            />
          </div>
          <h1 className="header__title">Viajar a Sri Lanka</h1>
        </header>
      ) : null}
    </>
  );
};

export default Header;
