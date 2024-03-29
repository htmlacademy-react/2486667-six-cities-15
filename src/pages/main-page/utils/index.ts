import {City} from '@/types/city';
import {Offer} from '@/types/offer';

export const getCurrentOffers = (currentCity: City, offers: Offer[]): Offer[] => offers.filter((offer) => offer.city.name === currentCity?.name);
