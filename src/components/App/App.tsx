import Header from "../Header/Header";
import Homepage from "../../pages/Homepage/Homepage";
import { Navigate, Route, Routes } from "react-router-dom";
import paths from "../../routers/paths/paths";
import PlacesListPage from "../../pages/PlacesListPage/PlacesListPage";
import NavigationBar from "../NavigationBar/NavigationBar";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const App = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <Header />
      <main className={`main-content ${user ? "has-nav" : null}`}>
        <Routes>
          <Route path={paths.homePage} element={<Homepage />} />
          <Route
            path={paths.places}
            element={
              <ProtectedRoute>
                <PlacesListPage />
                <NavigationBar />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Navigate to={paths.places} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
