import {OFFERS} from '@/mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillingOffers, setSort, sortOffers} from '@/store/actions';
import {City} from '@/types/city';
import {Offer} from '@/types/offer';
import {SORT_OPTION_DEFAULT, SortOption} from "@/components/catalog/offers-sort/utils/const";

type TInitialState = {
  offersData: Offer[];
  currentCity: City | null;
  currentOffers: Offer[];
  currentSortOption: SortOption;
}

const initialState: TInitialState = {
  offersData: [],
  currentCity: null,
  currentOffers: [],
  currentSortOption: SORT_OPTION_DEFAULT,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fillingOffers, (state) => {
      state.offersData = OFFERS;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
      state.currentOffers = state.offersData.filter((offer) => offer.city.name === action.payload.name);
    })
    .addCase(setSort, (state, action) => {
      state.currentSortOption = action.payload;
    })
    .addCase(sortOffers, (state) => {
      switch (state.currentSortOption) {
        case SortOption.Popular:
          state.currentOffers = state.offersData.filter((offer) => offer.city.name === state.currentCity?.name);
          break;
        case SortOption.PriceLowToHigh:
          state.currentOffers = [...state.currentOffers].sort((a, b) => a.price - b.price);
          break;
        case SortOption.PriceHighToLow:
          state.currentOffers = [...state.currentOffers].sort((a, b) => b.price - a.price);
          break;
        case SortOption.TopRatedFirst:
          state.currentOffers = [...state.currentOffers].sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
    });
});
