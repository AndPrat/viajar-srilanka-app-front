import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import paths from "../../routers/paths/paths";

const ProtectedRoute = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [user, isLoading] = useAuthState(auth);

  if (!user && !isLoading) {
    return <Navigate to={paths.homePage} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
