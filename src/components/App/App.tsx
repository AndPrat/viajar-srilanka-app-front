import Header from "../Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import NavigationBar from "../NavigationBar/NavigationBar";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <HomePage />
        <NavigationBar />
      </main>
    </div>
  );
};

export default App;
