import {clsx} from "clsx";

type FooterProps = {
  extraClass?: string;
}

export default function Footer({ extraClass }: FooterProps): JSX.Element {
  return (
    <footer className={clsx('footer', extraClass !== undefined && extraClass)}>
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </a>
    </footer>
  );
}
