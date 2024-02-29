import {Navigate, useLocation} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../../const';
import {setAuthStatus} from '../../../utils/common';
import {Location} from '@remix-run/router/history';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: JSX.Element;
}

type FromState = {
  from?: Location;
}

export default function ProtectedRoute({ onlyUnAuth, children }: ProtectedRouteProps): JSX.Element {
  const location = useLocation() as Location<FromState>;
  const isAuthenticate = setAuthStatus(AuthStatus.Auth);

  // Авторизованы и стр логина => переход на предыдущую перед стр логина страницу
  if (isAuthenticate && onlyUnAuth) {
    const from = location.state?.from || { pathname: AppRoute.Root };
    return <Navigate to={from} />;
  }

  // Не авторизованы и не стр логина => переход на стр логина
  if (!isAuthenticate && !onlyUnAuth) {
    return <Navigate to={AppRoute.Login} state={{from: location}} />;
  }

  return children;
}
