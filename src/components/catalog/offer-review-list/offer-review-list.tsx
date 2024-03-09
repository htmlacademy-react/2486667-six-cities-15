import {Review} from '@/types/reviews';
import OfferReviewItem from '@/components/catalog/offer-review-item/offer-review-item';

type OfferReviewListProps = {
  reviews: Review[];
}

export default function OfferReviewList({ reviews }: OfferReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.length > 0 &&
        reviews.map((review) => (
          <OfferReviewItem review={review} key={review.id} />
        ))}
    </ul>
  );
}
