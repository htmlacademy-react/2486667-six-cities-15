import { ReactNode } from 'react';
import {clsx} from 'clsx';

type ContainerProps = {
  children: ReactNode;
  extraClass?: string;
}

export default function Container({ children, extraClass }: ContainerProps): JSX.Element {
  return (
    <main className={clsx('page__main', extraClass !== undefined && extraClass)}>
      {children}
    </main>
  );
}
