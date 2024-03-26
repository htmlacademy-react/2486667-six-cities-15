import {Navigate, useLocation} from 'react-router-dom';
import {AppRoute} from '@/utils/const';
import {Location} from 'react-router-dom';
import {useAuth} from '@/hooks/user-authorisation/user-authorisation';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: JSX.Element;
}

type FromState = {
  from?: Location;
}

export default function ProtectedRoute({ onlyUnAuth, children }: ProtectedRouteProps): JSX.Element {
  const location = useLocation() as Location<FromState>;
  const isAuthenticate = useAuth();

  // Авторизованы и стр логина => переход на главную или на предыдущую страницу
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
