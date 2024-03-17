import {OFFERS} from '@/mocks/offers';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, fillingOffers} from '@/store/actions';
import {City} from '@/types/city';
import {Offer} from '@/types/offer';

type TInitialState = {
  offersData: Offer[];
  currentCity: City | null;
  currentOffers: Offer[];
}

const initialState: TInitialState = {
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
