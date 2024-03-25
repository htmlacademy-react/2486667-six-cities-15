import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '@/utils/const';
import {Helmet} from 'react-helmet-async';
import Container from '@/components/common/container/container';
import MainContainer from '@/components/common/main-container/main-container';
import Header from '@/components/common/header/header';
import Footer from '@/components/common/footer/footer';

const VARIANTS = {
  page: {text: 'Page'},
  offer: {text: 'Offer'},
};

type NotFoundPageProps = {
  type: keyof typeof VARIANTS;
}

export default function NotFoundPage({ type }: NotFoundPageProps): JSX.Element {
  const location = useLocation();
  const pathname = decodeURIComponent(location.pathname);

  return (
    <Container extraClass="page--gray page--main">
      <Helmet>
        <title>6 cities: error 404 page</title>
      </Helmet>

      <Header />

      <MainContainer extraClass="page__main--index">
        <div className="cities">
          <div className="container" style={{paddingTop: '100px'}}>
            <h1 className="login__title">404. Page not found</h1>

            <p style={{position: 'relative', zIndex: '1', wordWrap: 'break-word'}}>
              {VARIANTS[type].text} with pathname <b>{pathname}</b> not found.
            </p>

            <br/>

            <Link to={AppRoute.Root} style={{color: '#4481c3'}}>
              Main page
            </Link>
          </div>
        </div>
      </MainContainer>

      <Footer />
    </Container>
  );
}
