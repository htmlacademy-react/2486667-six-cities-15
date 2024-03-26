import {Host} from './host';
import {OfferPreview} from './offer-preview';

export type Offer = {
  description: string;
  images: string[];
  goods: string[];
  host: Host;
  bedrooms: number;
  maxAdults: number;
} & OfferPreview;

export type ConvertDate = {
  monthYear: string;
  fullDate: string;
}
