import {OFFERS} from '@/mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillingOffers, setSortId, sortOffers} from '@/store/actions';
import {City} from '@/types/city';
import {Offer} from '@/types/offer';
import {OFFERS_SORT_OPTION_ID_DEFAULT} from '@/utils/const';

type TInitialState = {
  offersData: Offer[];
  currentCity: City | null;
  currentOffers: Offer[];
  currentSortId: number;
}

const initialState: TInitialState = {
  offersData: [],
  currentCity: null,
  currentOffers: [],
  currentSortId: OFFERS_SORT_OPTION_ID_DEFAULT,
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
    .addCase(setSortId, (state, action) => {
      state.currentSortId = action.payload;
    })
    .addCase(sortOffers, (state) => {
      switch (state.currentSortId) {
        // 'Popular'
        case 0:
          state.currentOffers = state.offersData.filter((offer) => offer.city.name === state.currentCity?.name);
          break;
        // 'Price: low to high'
        case 1:
          state.currentOffers = [...state.currentOffers].sort((a, b) => a.price - b.price);
          break;
        // 'Price: high to low'
        case 2:
          state.currentOffers = [...state.currentOffers].sort((a, b) => b.price - a.price);
          break;
        // 'Top rated first'
        case 3:
          state.currentOffers = [...state.currentOffers].sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
    });
});
