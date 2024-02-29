import {ChangeEvent, Fragment, useState} from 'react';

type OfferReviewFormProps = {
  isAuth?: boolean;
}
export default function OfferReviewForm({ isAuth }: OfferReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState<{[key: string]: number | string}>({
    'rating': 0,
    'review': '',
  });

  const fieldChangeHandler = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <div>
      {isAuth &&
        <form className="reviews__form form" action="#" method="post">
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            {
              Array.from(Array(5).keys()).map((index) => {
                const n = 5 - index;
                let title = '';

                switch (true) {
                  case (n === 1):
                    title = 'terribly';
                    break;
                  case (n === 2):
                    title = 'badly';
                    break;
                  case (n === 3):
                    title = 'not bad';
                    break;
                  case (n === 4):
                    title = 'good';
                    break;
                  case (n === 5):
                    title = 'perfect';
                    break;
                }

                return (
                  (
                    <Fragment key={n}>
                      <input className="form__rating-input visually-hidden"
                        name="rating"
                        value={n}
                        id={`${n}-stars`}
                        type="radio"
                        onChange={fieldChangeHandler}
                        checked={Number(formData.rating) === n}
                      />
                      <label htmlFor={`${n}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>
                    </Fragment>
                  )
                );
              })
            }
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
            <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
          </div>
        </form>}
    </div>
  );
}
