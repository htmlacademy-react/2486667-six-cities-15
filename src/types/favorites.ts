import {Offer} from './offer';

export type Favorites = {
  [key: string]: Offer[];
}

export type PostFavoriteStatusArgs = {
  offerId: string;
  favStatus: number;
}
