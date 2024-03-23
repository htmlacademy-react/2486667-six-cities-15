import {Offer} from '@/types/offer';
import {getRatingWidth} from '@/utils';
import OfferBookmark from '@/components/catalog/offer-bookmark/offer-bookmark';
import {COUNT_ADULTS_SINGULAR, COUNT_BEDROOMS_SINGULAR} from "@/components/catalog/offer-description/utils/const";

type OfferDescriptionProps = {
  offer: Offer;
}

export default function OfferDescription({ offer }: OfferDescriptionProps):JSX.Element {
  return (
    <>
      {offer.isPremium &&
        <div className="offer__mark">
          <span>Premium</span>
        </div>}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {offer.title}
        </h1>
        <OfferBookmark isFavorite={offer.isFavorite} block='offer' />
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{width: getRatingWidth(offer.rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{offer.rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {offer.type}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {offer.bedrooms} Bedroom{offer.bedrooms > COUNT_BEDROOMS_SINGULAR && 's'}
        </li>
        <li className="offer__feature offer__feature--adults">
          Max {offer.maxAdults} adult{offer.maxAdults > COUNT_ADULTS_SINGULAR && 's'}
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">&euro;{offer.price}</b>
        <span className="offer__price-text">&nbsp;&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        <ul className="offer__inside-list">
          {offer.goods && offer.goods.map((good) => (
            <li className="offer__inside-item" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
      <div className="offer__host">
        <h2 className="offer__host-title">Meet the host</h2>
        <div className="offer__host-user user">
          <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
            <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
          </div>
          <span className="offer__user-name">
            {offer.host.name}
          </span>
          {offer.host.isPro &&
            <span className="offer__user-status">
              Pro
            </span>}
        </div>
        <div className="offer__description">
          <p className="offer__text">
            {offer.description}
          </p>
        </div>
      </div>
    </>
  );
}
