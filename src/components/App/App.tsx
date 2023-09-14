import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Suspense } from "react";
import Header from "../Header/Header";
import { LazyHomepage } from "../../pages/Homepage/Homepage";
import paths from "../../routers/paths/paths";
import { LazyPlaceLisPage } from "../../pages/PlacesListPage/PlacesListPage";
import NavigationBar from "../NavigationBar/NavigationBar";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { auth } from "../../firebase";
import "react-toastify/dist/ReactToastify.css";
import NewPlacePage from "../../pages/NewPlacePage/NewPlacePage";

const App = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <Header />
      <main className={`main-content ${user ? "has-nav" : null}`}>
        <ToastContainer />
        <Routes>
          <Route
            path={paths.homePage}
            element={
              <Suspense>
                <LazyHomepage />
              </Suspense>
            }
          />
          <Route
            path={paths.places}
            element={
              <ProtectedRoute>
                <Suspense>
                  <LazyPlaceLisPage />
                </Suspense>
                <NavigationBar />
              </ProtectedRoute>
            }
          />
          <Route
            path={paths.newPlace}
            element={
              <ProtectedRoute>
                <Suspense>
                  <NewPlacePage />
                </Suspense>
                <NavigationBar />
              </ProtectedRoute>
            }
          ></Route>

          <Route path="/" element={<Navigate to={paths.places} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
