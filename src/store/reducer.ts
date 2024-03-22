import {OFFERS} from '@/mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillingOffers, setSortOption} from '@/store/actions';
import {City} from '@/types/city';
import {Offer} from '@/types/offer';
import {DEFAULT_CITY, SORT_OPTION_DEFAULT} from '@/utils/const';
import {SortOption} from '@/components/catalog/offers-sort/utils/const';

type TInitialState = {
  offersData: Offer[];
  currentCity: City;
  sortOption: SortOption;
}

const initialState: TInitialState = {
  offersData: [],
  currentCity: DEFAULT_CITY,
  sortOption: SORT_OPTION_DEFAULT,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fillingOffers, (state) => {
      state.offersData = OFFERS;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    });
});
