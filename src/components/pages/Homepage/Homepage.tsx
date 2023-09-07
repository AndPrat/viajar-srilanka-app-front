import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import { signInWithPopup } from "firebase/auth";
import paths from "../../../routers/paths/paths";
import { auth, gitHubProvider } from "../../../firebase";
import Button from "../../Button/Button";

const Homepage = (): React.ReactElement => {
  const navigate = useNavigate();

  const login = async () => {
    await signInWithPopup(auth, gitHubProvider);
    navigate(paths.places);
  };

  return (
    <div className="home-page">
      <div className="home-page__information">
        <h2 className="home-page__title">Tu viaje a Sri Lanka empieza aquí</h2>
        <Button
          className="button button--primary button--large"
          actionOnClick={login}
        >
          Accede
        </Button>
      </div>
      <picture>
        <source
          srcSet="/img/background-image-m.webp"
          media="(max-width: 768px)"
          type="image/webp"
        />
        <source
          srcSet="/img/background-image-m.jpg"
          media="(max-width: 768px)"
        />
        <source
          srcSet="/img/background-image.webp"
          media="(min-width: 768px)"
          type="image/webp"
        />
        <source srcSet="/img/background-image.jpg" media="(min-width: 768px)" />
        <img
          className="home-page__background"
          src="/img/background-image.jpg"
          alt="Vistas de Sigiriya en el amanecer"
          srcSet="/img/background-image.jpg"
          width={300}
          height={400}
          loading="eager"
        />
      </picture>
    </div>
  );
};

export default Homepage;
