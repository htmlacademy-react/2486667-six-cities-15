import {Offer} from '../types/offer';
import {City} from '../types/city';

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

export function getRatingWidth(rating: number): string {
  return `${((rating / 5) * 100).toFixed(1) }%`;
}

export const getCities = (offers: Offer[]): City[] => {
  const cities = offers.map((offer) => offer.city);

  return cities.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.name === value.name && t.name === value.name
    ))
  );
};
