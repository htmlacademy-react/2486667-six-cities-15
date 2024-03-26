import {Offer} from './offer';

export type Favorites = {
  [key: string]: Offer[];
}

export type ChangeFavoriteArgs = {
  offerId: string;
  favStatus: number;
}
