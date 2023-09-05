import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <NavigationBar />
      </main>
    </div>
  );
};

export default App;
