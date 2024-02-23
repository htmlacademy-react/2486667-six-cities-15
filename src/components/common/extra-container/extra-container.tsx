import {ReactNode} from 'react';
import {clsx} from 'clsx';

type ExtraContainerProps = {
  children: ReactNode;
  extraClass?: string;
}

export default function ExtraContainer({ children, extraClass }: ExtraContainerProps): JSX.Element {
  return (
    <div className={clsx('page', extraClass !== undefined && extraClass)}>
      {children}
    </div>
  );
}
