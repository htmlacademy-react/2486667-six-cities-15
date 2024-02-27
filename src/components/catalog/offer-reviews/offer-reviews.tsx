import OfferReviewList from '../offer-review-list/offer-review-list';
import OfferReviewForm from '../offer-review-form/offer-review-form';

type OfferReviewsProps = {
  isAuth?: boolean;
}

export default function OfferReviews({ isAuth }: OfferReviewsProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>

      <OfferReviewList />

      <OfferReviewForm isAuth={isAuth} />
    </section>
  );
}
