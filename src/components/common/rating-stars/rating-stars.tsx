import {RATING} from './const';
import {Fragment, ReactEventHandler} from 'react';

type TFieldChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

type RatingStarsProps = {
  fieldChangeHandler: TFieldChangeHandler;
  rating: number;
}

export default function RatingStars({ fieldChangeHandler, rating }: RatingStarsProps) {
  return (
    <>
      {RATING.map(({value, title}) => (
        <Fragment key={value}>
          <input className="form__rating-input visually-hidden"
            name="rating"
            id={`${value}-stars`}
            type="radio"
            value={value}
            onChange={fieldChangeHandler}
            checked={Number(rating) === Number(value) && Number(rating) !== 0}
          />
          <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </>
  );
}
