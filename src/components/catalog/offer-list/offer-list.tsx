import {Offer} from '@/types/offer';
import {useState} from 'react';
import {Location} from '@/types/location';
import OfferCard from '@/components/catalog/offer-card/offer-card';
import {DEFAULT_CITY} from "@/utils/const";
import MapLeaflet from "@/components/common/map-leaflet/map-leaflet";
import {City} from "@/types/city";

type OfferListProps = {
  offers: Offer[];
  currentCity: City;
  block: string;
}

export default function OfferList({ offers, currentCity, block }: OfferListProps): JSX.Element {
  const [activePoint, setActivePoint] = useState<Location | null>(null);

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

        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
                  Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>

        <div className="cities__places-list places__list tabs__content">
          {offers && offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} block={block} hoverHandler={hoverHandler} />
          ))}
        </div>
      </section>

      <div className="cities__right-section">
        <MapLeaflet
          defaultCity={DEFAULT_CITY}
          points={points}
          activePoint={activePoint}
          extraClass="cities__map"
        />
      </div>
    </div>
  );
}
