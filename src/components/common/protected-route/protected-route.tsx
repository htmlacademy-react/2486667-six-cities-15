import {Navigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../../const';

type ProtectedRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

export default function ProtectedRoute({ authStatus, children }: ProtectedRouteProps): JSX.Element {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
