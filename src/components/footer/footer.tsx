type FooterProps = {
  footerClass?: string;
}

export default function Footer({ footerClass }: FooterProps): JSX.Element {
  return (
    <footer className={`footer ${footerClass ? footerClass : ''}`}>
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </a>
    </footer>
  );
}
