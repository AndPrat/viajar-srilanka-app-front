import Button from "../Button/Button";
import "./HomePage.css";

const HomePage = (): React.ReactElement => {
  return (
    <div className="home__page">
      <h2 className="home__title">Tu viaje a Sri Lanka empieza aquí</h2>
      <Button
        className="button button--primary button--large"
        actionOnClick={() => {}}
      >
        Acceder
      </Button>
    </div>
  );
};

export default HomePage;
