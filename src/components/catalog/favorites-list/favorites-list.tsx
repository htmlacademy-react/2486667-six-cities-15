import {Link} from 'react-router-dom';
import OfferCard from '../offer-card/offer-card';
import {Favorites} from '../../../types/favorites';
import {City} from '../../../types/city';

type FavoritesListProps = {
  favorites: Favorites;
  cities: City[];
}

export default function FavoritesList({ favorites, cities }: FavoritesListProps): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <ul className="favorites__list">
        {favorites && Object.entries(favorites).map(([cityName, groupedFavorites]) => (
          <li key={cityName} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={cities.find((item) => (item.name === cityName)).path}>
                  <span>{cityName}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {groupedFavorites &&
                groupedFavorites.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} block='favorites' />
                ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}