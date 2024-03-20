import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '@/utils/const';
import {clsx} from 'clsx';

export default function HeaderLogo(): JSX.Element {
  const {pathname} = useLocation();

  const isMainPage = () => pathname === '/';

  return (
    <Link
      to={AppRoute.Root}
      onClick={isMainPage() ? (event) => event.preventDefault() : undefined}
      className={clsx('header__logo-link', !isMainPage() && 'header__logo-link--active')}
    >
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}
