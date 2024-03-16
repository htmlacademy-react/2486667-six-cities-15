import {createAction} from '@reduxjs/toolkit';
import {City} from '@/types/city';

export const fillingOffers = createAction('offers/fillingOffers');
export const changeCity = createAction('cities/changeCity', (value: City) => ({
  payload: value,
}));
