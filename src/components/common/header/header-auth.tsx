import {Link} from 'react-router-dom';
import {AppRoute} from '@/utils/const';
import {useActionCreators, useAppSelector} from '@/hooks/store/store';
import {usersActions, usersSelectors} from '@/store/slices/users';
import {useFavoriteCount} from '@/hooks/use-favorite-count/use-favorite-count';

export default function HeaderAuth() {
  const user = useAppSelector(usersSelectors.user);
  const favoriteCount = useFavoriteCount();
  const { logoutUser } = useActionCreators(usersActions);

  const logoutClickHandler = () => {
    logoutUser();
  };

  return (
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
    </>
  );
}
