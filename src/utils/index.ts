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
  return `${((Math.round(rating) / 5) * 100)}%`;
}

export function getIsAuth(status: AuthStatus): boolean {
  return status === AuthStatus.Auth;
}

export const convertDate = (str: string) => {
  const date = new Date(str);
  const monthYear = `${date.toLocaleString('en-GB', { month: 'long' }) } ${ date.getFullYear()}`;
  const fullDate = str.slice(0, 10);

  return {monthYear, fullDate};
};
