import {Offer} from '@/types/offer';
import {useState} from 'react';
import {Location} from '@/types/location';
import OfferCard from '@/components/catalog/offer-card/offer-card';
import MapLeaflet from '@/components/common/map-leaflet/map-leaflet';
import {City} from '@/types/city';
import OffersSort from '@/components/catalog/offers-sort/offers-sort';
import {useAppSelector} from '@/hooks/store/store';
import {getSortedOffers} from '@/components/catalog/offers-list/utils';
import {offersSelectors} from '@/store/slices/offers';

type OffersListProps = {
  offers: Offer[];
  currentCity: City;
  block: string;
}

export default function OffersList({ offers, currentCity, block }: OffersListProps): JSX.Element {
  const [activePoint, setActivePoint] = useState<Location | null>(null);
  const sortOption = useAppSelector(offersSelectors.sortOption);
  const sortedOffers = getSortedOffers(sortOption, offers);

  const hoverHandler = (id: Offer['id'] | null) => {
    const point = offers.find((offer) => offer.id === id)?.location || null;
    setActivePoint(point);
  };

  const points = offers.map((offer) => offer.location);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>

        <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>

        <OffersSort />

        <div className="cities__places-list places__list tabs__content">
          {sortedOffers && sortedOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} block={block} hoverHandler={hoverHandler} />
          ))}
        </div>
      </section>

      <div className="cities__right-section">
        <MapLeaflet
          currentCity={currentCity}
          points={points}
          activePoint={activePoint}
          extraClass="cities__map"
        />
      </div>
    </div>
  );
}
