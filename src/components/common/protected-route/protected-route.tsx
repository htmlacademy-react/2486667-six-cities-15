import {Navigate} from 'react-router-dom';

type ProtectedRouteProps = {
  hasAccess: boolean;
  children: JSX.Element;
}

export default function ProtectedRoute({ hasAccess, children }: ProtectedRouteProps): JSX.Element {
  if (hasAccess) {
    return children;
  }

  return <Navigate to="/login" />;
}
