import {RATING} from './const';
import {Fragment, ReactEventHandler} from 'react';

type TFieldChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

type RatingStarsProps = {
  fieldChangeHandler: TFieldChangeHandler;
}

export default function RatingStars({ fieldChangeHandler }: RatingStarsProps) {
  return (
    <>
      {RATING.map(({value, title}) => (
        <Fragment key={value}>
          <input className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={value}
            id={`${value}-stars`}
            type="radio"
            onChange={fieldChangeHandler}
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
