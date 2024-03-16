import {OFFERS} from '@/mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillingOffers} from '@/store/actions';

const initialState = {
  offersData: [],
  currentCity: null,
  currentOffers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fillingOffers, (state) => {
      state.offersData = OFFERS;
    })
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
      state.currentOffers = state.offersData.filter((offer) => offer.city.name === action.payload.name);
    });
});
