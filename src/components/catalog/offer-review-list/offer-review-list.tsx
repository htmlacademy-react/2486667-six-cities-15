import {Review} from '@/types/reviews';
import OfferReviewItem from '@/components/catalog/offer-review-item/offer-review-item';
import OfferReviewEmpty from '@/components/catalog/offer-review-empty/offer-review-empty';

type OfferReviewListProps = {
  reviews: Review[];
}

export default function OfferReviewList({ reviews }: OfferReviewListProps): JSX.Element {
  return (
    <>
      {reviews.length !== 0 && (
        <ul className="reviews__list">
          {reviews.map((review) => (
            <OfferReviewItem review={review} key={review.id} />
          ))}
        </ul>
      )}

      {reviews.length === 0 &&
        <OfferReviewEmpty />}
    </>
  );
}
