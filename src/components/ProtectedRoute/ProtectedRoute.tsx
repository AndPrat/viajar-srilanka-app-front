import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import paths from "../../routers/paths/paths";

const ProtectedRoute = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to={paths.homePage} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
