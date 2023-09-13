import Header from "../Header/Header";
import { LazyHomepage } from "../../pages/Homepage/Homepage";
import { Navigate, Route, Routes } from "react-router-dom";
import paths from "../../routers/paths/paths";
import { LazyPlaceLisPage } from "../../pages/PlacesListPage/PlacesListPage";
import NavigationBar from "../NavigationBar/NavigationBar";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Suspense } from "react";

const App = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <Header />
      <main className={`main-content ${user ? "has-nav" : null}`}>
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

          <Route path="/" element={<Navigate to={paths.places} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
