import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import Homepage from "../pages/Homepage/Homepage";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <Homepage />
        <NavigationBar />
      </main>
    </div>
  );
};

export default App;
