import {Offer} from '../types/offer';
import {AppRoute} from '../const';
import {CityPath} from '../types/city';

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

/* Получение массива с объектами {name: 'название города', path: 'путь к странице'} */
export const getCitiesWithPath = (offers: Offer[]): CityPath[] => {
  const cities = offers.map((offer) => offer.city.name);
  const uniqCities = [...new Set(cities)];

  return uniqCities.map((city) => ({
    name: city,
    path: city === 'Amsterdam' ? AppRoute.Root : `${AppRoute.Root}${city}`,
  }));
};
