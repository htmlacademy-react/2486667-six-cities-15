import {FormEvent, ReactEventHandler, useState} from 'react';
import RatingStars from '@/components/common/rating-stars/rating-stars';
import {PostReviewArg} from '@/types/reviews';
import {useParams} from 'react-router-dom';
import {useActionCreators} from '@/hooks/store/store';
import {reviewsActions} from '@/store/slices/reviews';
import {toast} from 'react-toastify';
import {SUBMIT_SUCCESS_MESSAGE} from '@/components/catalog/offer-review-form/const';

type TFieldChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

type OfferReviewFormProps = {
  scrollToTitle: () => void;
}

export default function OfferReviewForm({ scrollToTitle }: OfferReviewFormProps): JSX.Element {
  const { id } = useParams();
  const [formData, setFormData] = useState<Omit<PostReviewArg, 'offerId'>>({
    comment: '',
    rating: 0,
  });
  const { postReview } = useActionCreators(reviewsActions);

  const fieldChangeHandler: TFieldChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    setFormData({...formData, [name]: value});
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const postReviewArg: PostReviewArg = {
      offerId: id as string,
      comment: formData.comment,
      rating: Number(formData.rating),
    };

    postReview(postReviewArg).then(() => {
      toast.info(SUBMIT_SUCCESS_MESSAGE);
      setFormData({
        comment: '',
        rating: 0,
      });
      scrollToTitle();
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RatingStars fieldChangeHandler={fieldChangeHandler} rating={formData.rating} />
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={fieldChangeHandler}
        value={formData.comment}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={(formData.rating) === 0 || (formData.comment).length < 50}
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
