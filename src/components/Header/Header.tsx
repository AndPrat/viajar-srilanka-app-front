import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <>
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
    </>
  );
};

export default Header;
