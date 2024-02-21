import ExtraContainer from '../../components/common/extra-container/extra-container';
import Container from '../../components/common/container/container';
import Header from '../../components/common/header/header';

export default function NotFoundPage(): JSX.Element {
  return (
    <ExtraContainer>
      <Header />
      <Container extraClass="page--not-found">
        <div>Страница не найдена</div>
        <a href="/">На главную</a>
      </Container>
    </ExtraContainer>
  );
}
