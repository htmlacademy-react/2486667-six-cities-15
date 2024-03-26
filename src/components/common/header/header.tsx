import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '@/utils/const';
import HeaderLogo from '@/components/common/header-logo/header-logo';
import {useActionCreators, useAppSelector} from '@/hooks/store/store';
import {usersActions, usersSelectors} from '@/store/slices/users';
import {useAuth} from '@/hooks/user-authorisation/user-authorisation';
import {useFavoriteCount} from '@/hooks/use-favorite-count/use-favorite-count';

export default function Header(): JSX.Element {
  const { logoutUser } = useActionCreators(usersActions);
  const isAuthenticate = useAuth();
  const user = useAppSelector(usersSelectors.user);
  const {pathname} = useLocation();
  const favoriteCount = isAuthenticate ? useFavoriteCount() : 0;

  const logoutClickHandler = () => {
    logoutUser();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthenticate &&
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{user?.email}</span>
                      <span className="header__favorite-count">{favoriteCount}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="#" onClick={logoutClickHandler}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </>}
              {!isAuthenticate && (pathname as AppRoute !== AppRoute.Login as AppRoute) &&
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign in</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
