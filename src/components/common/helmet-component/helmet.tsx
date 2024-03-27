import {Helmet} from 'react-helmet-async';

type HelmetProps = {
  title: string;
}

export default function HelmetComponent({ title }: HelmetProps) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
