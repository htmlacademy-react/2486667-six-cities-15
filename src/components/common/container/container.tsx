import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  extraClass?: string;
}

export default function Container({ children, extraClass }: ContainerProps): JSX.Element {
  return (
    <main className={`page__main ${extraClass ? extraClass : ''}`}>
      {children}
    </main>
  );
}
