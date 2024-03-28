import {convertDate, getRatingWidth} from '@/utils';
import {Review} from '@/types/reviews';

type OfferReviewItemProps = {
  review: Review;
}

export default function OfferReviewItem({ review }: OfferReviewItemProps) {
  const {monthYear, fullDate} = convertDate(review.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingWidth(review.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text" style={{wordBreak: 'break-all'}}>
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={fullDate}>{monthYear}</time>
      </div>
    </li>
  );
}
