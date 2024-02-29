import Container from '../../components/common/container/container';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainContainer from '../../components/common/main-container/main-container';
import {Helmet} from 'react-helmet-async';

export default function NotFoundPage(): JSX.Element {
  const location = useLocation();

  return (
    <Container extraClass="page--gray page--main">
      <Helmet>
        <title>6 cities: error 404 page</title>
      </Helmet>

      <Header />

      <MainContainer extraClass="page__main--index">
        <div className="cities">
          <div className="container" style={{paddingTop: '100px'}}>
            <h1 className="login__title">404. Страница не найдена</h1>

            <p style={{position: 'relative', zIndex: '1', wordWrap: 'break-word'}}>
              Страница по адресу <b>{location.pathname}</b> не найдена.
            </p>

            <br/>

            <Link to={AppRoute.Root} style={{color: '#4481c3'}}>
              Перейти на главную
            </Link>
          </div>
        </div>
      </MainContainer>

      <Footer />
    </Container>
  );
}
