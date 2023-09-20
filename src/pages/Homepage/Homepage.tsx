import { browserPopupRedirectResolver, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { auth, gitHubProvider } from "../../firebase";
import paths from "../../routers/paths/paths";
import "./Homepage.css";
import { Helmet } from "react-helmet";

const Homepage = (): React.ReactElement => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const login = async () => {
    await signInWithPopup(auth, gitHubProvider, browserPopupRedirectResolver);
    navigate(paths.places);
  };

  if (user) {
    return <Navigate to={paths.places} />;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Viajar a Sri Lanka</title>
        <meta
          name="description"
          content="Con Viajar a Sri Lanka podrás descubrir muchos lugares únicos de este maravilloso país"
        />
      </Helmet>
      <div className="home-page">
        <div className="home-page__information">
          <h2 className="home-page__title">
            Tu viaje a Sri Lanka empieza aquí
          </h2>
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
          <source
            srcSet="/img/background-image.jpg"
            media="(min-width: 768px)"
          />
          <img
            className="home-page__background"
            src="/img/background-image.jpg"
            alt="Vistas de Sigiriya en el amanecer"
            srcSet="/img/background-image.jpg"
            width={300}
            height={400}
          />
        </picture>
      </div>
    </>
  );
};

export default Homepage;
