import {AppRoute} from '@/utils/const';
import {Link} from 'react-router-dom';
import OfferReviewList from '@/components/catalog/offer-review-list/offer-review-list';
import OfferReviewForm from '@/components/catalog/offer-review-form/offer-review-form';
import {Review} from '@/types/reviews';
import {useAuth} from '@/hooks/user-authorisation/user-authorisation';

type OfferReviewsProps = {
  reviews: Review[];
}

export default function OfferReviews({ reviews }: OfferReviewsProps): JSX.Element {
  const isAuth = useAuth();

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <OfferReviewList reviews={reviews} />

      {isAuth && <OfferReviewForm />}
      {!isAuth &&
        <div style={{textAlign: 'center', borderTop: '1px solid #efefef'}}>
          <p>Только авторизированные пользователи могут оставлять комменатрии.</p>
          <Link to={AppRoute.Login} style={{color: '#4481c3'}}>Авторизоваться</Link>
        </div>}
    </section>
  );
}
