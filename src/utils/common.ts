import {Offer} from '@/types/offer';
import {Favorites} from '@/types/favorites';
import {AuthStatus} from './const';

export function getFavoritesByLocation(offers: Offer[]): Favorites {
  return offers.reduce<Favorites>((acc, current) => {
    const location = current.city.name;

    if (current.isFavorite) {
      if (!(location in acc)) {
        acc[location] = [];
      }
      acc[location].push(current);
    }

    return acc;
  }, {});
}

export function getRatingWidth(rating: number): string {
  return `${((rating / 5) * 100).toFixed(1) }%`;
}

/*export const getCities = (offers: Offer[]): City[] => {
  const cities = offers.map((offer) => offer.city);

  return cities.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.name === value.name && t.name === value.name
    ))
  );
};*/

export function capitalizeU(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function setAuthStatus(status: AuthStatus): boolean {
  return status === AuthStatus.Auth;
}
