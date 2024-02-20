import {ReactNode} from 'react';

type ExtraContainerProps = {
  children: ReactNode;
  extraClass?: string;
}

export default function ExtraContainer({ children, extraClass }: ExtraContainerProps): JSX.Element {
  return (
    <div className={`page ${extraClass ? extraClass : ''}`}>
      {children}
    </div>
  );
}
