import {Review} from '@/types/reviews';
import OfferReviewItem from '@/components/catalog/offer-review-item/offer-review-item';
import OfferReviewEmpty from '@/components/catalog/offer-review-empty/offer-review-empty';
import {HIDDEN_CLASS, MAX_VISIBLE_REVIEWS} from '@/components/catalog/offer-review-list/const';
import {MouseEvent, useRef} from 'react';
import '@/components/catalog/offer-review-list/styles.css';

type OfferReviewListProps = {
  reviews: Review[];
  scrollToTitle: () => void;
}

export default function OfferReviewList({ reviews, scrollToTitle }: OfferReviewListProps): JSX.Element {
  const sortedReviews = reviews.toSorted((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  const sortedVisibleReviews = sortedReviews.slice(0, MAX_VISIBLE_REVIEWS);
  const sortedHiddenReviews = sortedReviews.slice(MAX_VISIBLE_REVIEWS);
  const hiddenListRef = useRef<HTMLUListElement | null>(null);
  const showBtnRef = useRef<HTMLAnchorElement | null>(null);
  const hideBtnRef = useRef<HTMLAnchorElement | null>(null);

  const showClickHandle = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    hiddenListRef.current?.classList.remove(HIDDEN_CLASS);
    showBtnRef.current?.classList.add(HIDDEN_CLASS);
    hideBtnRef.current?.classList.remove(HIDDEN_CLASS);
  };

  const hideClickHandle = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    hiddenListRef.current?.classList.add(HIDDEN_CLASS);
    showBtnRef.current?.classList.remove(HIDDEN_CLASS);
    hideBtnRef.current?.classList.add(HIDDEN_CLASS);
    scrollToTitle();
  };

  return (
    <>
      {sortedVisibleReviews.length !== 0 && (
        <ul className="reviews__list">
          {sortedVisibleReviews.map((review) => (
            <OfferReviewItem review={review} key={review.id} />
          ))}
        </ul>
      )}

      {sortedHiddenReviews.length !== 0 && (
        <>
          <ul className={`reviews__list ${HIDDEN_CLASS}`} ref={hiddenListRef}>
            {sortedHiddenReviews.map((review) => (
              <OfferReviewItem review={review} key={review.id} />
            ))}
          </ul>
          <a href="#" onClick={showClickHandle} ref={showBtnRef} className="showBtn">Show more</a>
          <a href="#" onClick={hideClickHandle} ref={hideBtnRef} className={`showBtn ${HIDDEN_CLASS}`}>Hide</a>
        </>
      )}

      {reviews.length === 0 &&
        <OfferReviewEmpty />}
    </>
  );
}
