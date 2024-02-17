import Header from '../header/header';
import HeaderLogin from '../header-login/header-login';
import Footer from '../footer/footer';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  extraClass?: string;
  mainClass?: string;
  isFooter?: boolean;
  footerClass?: string;
  isLoginHeader?: boolean;
}

export default function Container({ children, extraClass, mainClass, isFooter, footerClass, isLoginHeader }: ContainerProps): JSX.Element {
  return (
    <div className={`page ${extraClass ? extraClass : ''}`}>
      {!isLoginHeader && <Header />}
      {isLoginHeader && <HeaderLogin />}

      <main className={`page__main ${mainClass ? mainClass : ''}`}>
        {children}
      </main>

      {isFooter && <Footer footerClass={footerClass} />}
    </div>
  );
}
