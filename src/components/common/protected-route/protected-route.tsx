import {Navigate, useLocation} from 'react-router-dom';
import {AppRoute} from '@/utils/const';
import {getIsAuth} from '@/utils';
import {Location} from 'react-router-dom';
import {useAppSelector} from '@/hooks/store/store';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
  children: JSX.Element;
}

type FromState = {
  from?: Location;
}

export default function ProtectedRoute({ onlyUnAuth, children }: ProtectedRouteProps): JSX.Element {
  const location = useLocation() as Location<FromState>;
  const authStatus = useAppSelector((state) => state.authStatus);
  const isAuthenticate = getIsAuth(authStatus);

  // Авторизованы и стр логина => переход на главную
  if (isAuthenticate && onlyUnAuth) {
    //const from = location.state?.from || { pathname: AppRoute.Root };
    // По ТЗ переход всегда на главную
    return <Navigate to={AppRoute.Root} />;
  }

  // Не авторизованы и не стр логина => переход на стр логина
  if (!isAuthenticate && !onlyUnAuth) {
    return <Navigate to={AppRoute.Login} state={{from: location}} />;
  }

  return children;
}
