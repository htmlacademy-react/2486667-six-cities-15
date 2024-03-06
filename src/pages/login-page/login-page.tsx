import Container from '../../components/common/container/container';
import Header from '../../components/common/header/header';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import MainContainer from '../../components/common/main-container/main-container';
import LoginForm from '../../components/common/login-form/login-form';

export default function LoginPage() {
  return (
    <Container extraClass="page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <Header />
      <MainContainer extraClass="page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <LoginForm />

          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </MainContainer>
    </Container>
  );
}
