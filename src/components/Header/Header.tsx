import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img
            src="/img/logo-viajarSriLanka.svg"
            alt="Viajar a Sri Lanka logo"
            width="48"
            height="48"
          />
        </div>
        <h1 className="header__title">Viajar a Sri Lanka</h1>
      </header>
    </>
  );
};

export default Header;
