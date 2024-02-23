import {clsx} from 'clsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';

type FooterProps = {
  extraClass?: string;
}

export default function Footer({ extraClass }: FooterProps): JSX.Element {
  return (
    <footer className={clsx('footer', extraClass !== undefined && extraClass)}>
      <Link className="footer__logo-link" to={AppRoute.Root}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  );
}
