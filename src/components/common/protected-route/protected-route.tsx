import {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';

type ProtectedRouteProps = {
  hasAccess: boolean;
  children: ReactNode;
}

export default function ProtectedRoute({ hasAccess, children }: ProtectedRouteProps): JSX.Element {
  if (hasAccess) {
    return children;
  }

  return <Navigate to="/login" />;
}
