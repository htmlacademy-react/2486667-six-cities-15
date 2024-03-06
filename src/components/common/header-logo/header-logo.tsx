import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '@/utils/const';

export default function HeaderLogo(): JSX.Element {
  const {pathname} = useLocation();

  return (
    <>
      {pathname !== '/' &&
        <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
        </Link>}
      {pathname === '/' &&
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />}
    </>
  );
}
