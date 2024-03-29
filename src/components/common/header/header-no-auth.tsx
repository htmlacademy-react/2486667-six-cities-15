import {Link} from 'react-router-dom';
import {AppRoute} from '@/utils/const';

export default function HeaderNoAuth() {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to={AppRoute.Login}>
        <span className="header__signout">Sign in</span>
      </Link>
    </li>
  );
}
