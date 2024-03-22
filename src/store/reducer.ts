import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffer, loadOffers, requireAuth, setSortOption} from '@/store/actions';
import {City} from '@/types/city';
import {Offer} from '@/types/offer';
import {AuthStatus, DEFAULT_CITY, SORT_OPTION_DEFAULT} from '@/utils/const';
import {SortOption} from '@/components/catalog/offers-sort/utils/const';

type TInitialState = {
  offersData: Offer[];
  offerData: Offer | null;
  currentCity: City;
  sortOption: SortOption;
  authStatus: AuthStatus;
}

const initialState: TInitialState = {
  offersData: [],
  offerData: null,
  currentCity: DEFAULT_CITY,
  sortOption: SORT_OPTION_DEFAULT,
  authStatus: AuthStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offersData = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offerData = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload;
    });
});
