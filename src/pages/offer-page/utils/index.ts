import {Offer} from '@/types/offer';
import {MAX_NEAR_OFFERS} from '@/pages/offer-page/utils/const';
import {City} from '@/types/city';

export const getNearOffers = (currentCity: City, offers: Offer[]): Offer[] => {
  const result: Offer[] = [];

  offers.forEach((offer) => {
    if (offer.city.name === currentCity.name && result.length < MAX_NEAR_OFFERS) {
      result.push(offer);
    }
  });

  return result;
};
