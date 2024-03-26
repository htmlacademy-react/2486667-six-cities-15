import {Offer} from './offer';
import {OfferPreview} from "@/types/offer-preview";

export type Favorites = {
  [key: string]: Offer[];
}

export enum FavoriteStatus {
  Add = 1,
  Remove = 0,
}


export type ChangeFavoriteArgs = {
  offerId: string;
  status: FavoriteStatus;
}

export type ChangeFavoriteResponse = {
  offer: OfferPreview;
  status: FavoriteStatus;
}
