import { Suspense } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase";
import {
  LazyHomepage,
  LazyNewPlacePage,
  LazyPlaceDetailPage,
  LazyPlaceLisPage,
} from "../../pages/LazyPages/LazyPages";
import paths from "../../routers/paths/paths";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

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
                  <LazyNewPlacePage />
                </Suspense>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path={paths.detailPlace}
            element={
              <ProtectedRoute>
                <Suspense>
                  <LazyPlaceDetailPage />
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
