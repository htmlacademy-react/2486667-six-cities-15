import {createAction} from '@reduxjs/toolkit';
import {City} from '@/types/city';

export const fillingOffers = createAction('offers/fillingOffers');

export const changeCity = createAction('cities/changeCity', (city: City) => ({
  payload: city,
}));

export const setSortId = createAction('offers/setSortId', (id: number) => ({
  payload: id,
}));

export const sortOffers = createAction('offers/sort');
