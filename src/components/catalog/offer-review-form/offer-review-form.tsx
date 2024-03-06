import { ReactEventHandler, useState} from 'react';
import RatingStars from "@/components/common/rating-stars/rating-stars";

type TFieldChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

export default function OfferReviewForm(): JSX.Element {
  const [formData, setFormData] = useState<{[key: string]: number | string}>({
    'rating': 0,
    'review': '',
  });

  const fieldChangeHandler: TFieldChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RatingStars fieldChangeHandler={fieldChangeHandler}/>
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={fieldChangeHandler}
        value={formData.review}
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
          disabled={(formData.rating as number) === 0 || (formData.review as string).length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
