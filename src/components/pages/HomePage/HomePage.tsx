import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { signInWithPopup } from "firebase/auth";
import paths from "../../../routers/paths/paths";
import { auth, gitHubProvider } from "../../../firebase";
import Button from "../../Button/Button";

const HomePage = (): React.ReactElement => {
  const navigate = useNavigate();

  const login = async () => {
    await signInWithPopup(auth, gitHubProvider);
    navigate(paths.places);
  };

  return (
    <div className="home-page">
      <div className="home-page__logo-home">
        <img
          src="/img/logo-viajarSriLanka.png"
          alt="Viajar a Sri Lanka logo"
          width="32"
          height="32"
        />
      </div>
      <h2 className="home-page__title">Tu viaje a Sri Lanka empieza aquí</h2>
      <Button
        className="button button--primary button--large"
        actionOnClick={login}
      >
        Accede
      </Button>
    </div>
  );
};

export default HomePage;
