import ExtraContainer from '../../components/common/extra-container/extra-container';
import Container from '../../components/common/container/container';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';

export default function NotFoundPage(): JSX.Element {
  return (
    <ExtraContainer>
      <Header />
      <Container extraClass="page--not-found">
        <div className="container">
          <div>Страница не найдена</div>
          <a href="/">На главную</a>
        </div>
      </Container>
      <Footer />
    </ExtraContainer>
  );
}
