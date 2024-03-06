import OfferReviewList from '../offer-review-list/offer-review-list';
import OfferReviewForm from '../offer-review-form/offer-review-form';
import {AppRoute} from '../../../const';
import {Link} from 'react-router-dom';

type OfferReviewsProps = {
  isAuth?: boolean;
}

export default function OfferReviews({ isAuth }: OfferReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>

      <OfferReviewList />

      {isAuth && <OfferReviewForm />}
      {!isAuth &&
        <div style={{textAlign: 'center', borderTop: '1px solid #efefef'}}>
          <p>Только авторизированные пользователи могут оставлять комменатрии.</p>
          <Link to={AppRoute.Login} style={{color: '#4481c3'}}>Авторизоваться</Link>
        </div>}
    </section>
  );
}
