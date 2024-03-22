import {SortOption} from '@/components/catalog/offers-sort/utils/const';
import {Offer} from '@/types/offer';

export const getSortedOffers = (sortOption: SortOption, offers: Offer[]): Offer[] => {
  let sortedOffers = [];

  switch (sortOption) {
    case SortOption.Popular:
      sortedOffers = offers;
      break;
    case SortOption.PriceLowToHigh:
      sortedOffers = offers.toSorted((a, b) => a.price - b.price);
      break;
    case SortOption.PriceHighToLow:
      sortedOffers = offers.toSorted((a, b) => b.price - a.price);
      break;
    case SortOption.TopRatedFirst:
      sortedOffers = offers.toSorted((a, b) => b.rating - a.rating);
      break;
    default:
      sortedOffers = offers;
      break;
  }

  return sortedOffers;
};
