import Header from "../Header/Header";
import Homepage from "../../pages/Homepage/Homepage";
import { Navigate, Route, Routes } from "react-router-dom";
import paths from "../../routers/paths/paths";
import PlacesListPage from "../../pages/PlacesListPage/PlacesListPage";
import NavigationBar from "../NavigationBar/NavigationBar";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path={paths.homePage} element={<Homepage />} />
          <Route
            path={paths.places}
            element={
              <>
                <PlacesListPage />
                <NavigationBar />
              </>
            }
          />

          <Route path="/" element={<Navigate to={paths.places} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
