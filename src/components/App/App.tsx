import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LazyHomepage } from "../../pages/Homepage/Homepage";
import NewPlacePage from "../../pages/NewPlacePage/NewPlacePage";
import { LazyPlaceLisPage } from "../../pages/PlacesListPage/PlacesListPage";
import paths from "../../routers/paths/paths";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const App = (): React.ReactElement => {
  const [user] = useAuthState(auth);
  return (
    <div className="container">
      <Header />
      <main className="main-content">
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
              </ProtectedRoute>
            }
          ></Route>

          <Route path="/" element={<Navigate to={paths.places} />} />
        </Routes>
        {user && <NavigationBar />}
      </main>
    </div>
  );
};

export default App;
