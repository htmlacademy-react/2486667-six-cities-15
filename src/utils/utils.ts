import {Offer} from '../types/offer';

export function getFavoritesByLocation(offers: Offer[]): {[key: string]: Offer[]} {
  return offers.reduce<{[key: string]: Offer[]}>((acc, current) => {
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

export function getRatingWidth(rating) {
  return `${((rating / 5) * 100).toFixed(1) }%`;
}
