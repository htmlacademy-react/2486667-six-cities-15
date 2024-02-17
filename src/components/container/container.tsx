import Header from '../header/header';
import Footer from '../footer/footer';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  extraClass?: string;
  mainClass?: string;
  isFooter: boolean;
}

export default function Container({ children, extraClass, mainClass, isFooter }: ContainerProps): JSX.Element {
  return (
    <div className={`page ${extraClass ? extraClass : ''}`}>
      <Header />

      <main className={`page__main ${mainClass ? mainClass : ''}`}>
        {children}
      </main>

      {isFooter && <Footer />}
    </div>
  );
}
