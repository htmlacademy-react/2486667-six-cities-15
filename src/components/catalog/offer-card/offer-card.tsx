import {Link} from 'react-router-dom';
import {Offer} from '../../../types/offer';
import {AppRoute} from '../../../const';
import {clsx} from 'clsx';
import {getRatingWidth} from '../../../utils/common';
import OfferBookmark from '../offer-bookmark/offer-bookmark';

type CardProps = {
  offer: Offer;
  block: string;
  mouseEnterHandler: (id: Offer['id'] | null) => void;
}

export default function OfferCard({ offer, block, mouseEnterHandler }: CardProps): JSX.Element {
  return (
    <article
      className={`${block}__card place-card`}
      onMouseEnter={() => mouseEnterHandler(offer.id)}
      onMouseLeave={() => mouseEnterHandler(null)}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={block === 'favorites' ? '150' : '260'}
            height={block === 'favorites' ? '110' : '200'}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className={clsx('place-card__info', block === 'favorites' && 'favorites__card-info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <OfferBookmark isFavorite={offer.isFavorite} block='place-card' />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingWidth(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
