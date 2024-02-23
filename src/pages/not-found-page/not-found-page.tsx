import ExtraContainer from '../../components/common/extra-container/extra-container';
import Container from '../../components/common/container/container';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';

export default function NotFoundPage(): JSX.Element {
  const location = useLocation();

  return (
    <ExtraContainer extraClass="page--gray page--login">
      <Header />
      <Container extraClass="page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">404. Страница не найдена</h1>
            <p style={{position: 'relative', zIndex: '1', wordWrap: 'break-word'}}>
              Страница по адресу <b>{location.pathname}</b> не найдена.
            </p>
            <br/>
            <Link to={AppRoute.Root} style={{color: '#4481c3'}}>
              Перейти на главную
            </Link>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </ExtraContainer>
  );
}
