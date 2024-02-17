import Header from '../header/header';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  extraClass?: string;
  mainClass?: string;
}

export default function Container({ children, extraClass, mainClass }: ContainerProps): JSX.Element {
  return (
    <div className={`page ${extraClass}`}>
      <Header />

      <main className={`page__main ${mainClass}`}>
        {children}
      </main>
    </div>
  );
}
