import {useLocation} from 'react-router-dom';
import {AppRoute} from '@/utils/const';
import HeaderLogo from '@/components/common/header-logo/header-logo';
import {useAuth} from '@/hooks/user-authorisation/user-authorisation';
import HeaderAuth from '@/components/common/header/header-auth';
import HeaderNoAuth from '@/components/common/header/header-no-auth';

export default function Header(): JSX.Element {
  const isAuth = useAuth();
  const {pathname} = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuth &&
                <HeaderAuth />}
              {!isAuth && (pathname as AppRoute !== AppRoute.Login as AppRoute) &&
                <HeaderNoAuth />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
