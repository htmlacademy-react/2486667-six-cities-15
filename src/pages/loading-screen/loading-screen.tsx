import {BounceLoader} from 'react-spinners';
import {CSSProperties} from 'react';

export default function LoadingScreen(): JSX.Element {
  const loaderCSS: CSSProperties = {
    margin: 'calc(50vh - 80px / 2 - 20px) auto',
  };

  return (
    <BounceLoader
      color="#4481C3"
      size={80}
      cssOverride={loaderCSS}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
