import {Link} from 'react-router-dom';
import OfferCard from '../offer-card/offer-card';
import {Favorites} from '../../../types/favorites';

type FavoritesListProps = {
  favorites: Favorites;
}

export default function FavoritesList({ favorites }: FavoritesListProps): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <ul className="favorites__list">
        {favorites && Object.keys(favorites).map((location) => (
          <li key={location} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="#">
                  <span>{location}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {favorites[location] &&
                favorites[location].map((offer) => (
                  <OfferCard key={offer.id} offer={offer} block='favorites' />
                ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
