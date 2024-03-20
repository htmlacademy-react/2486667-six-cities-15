import {createAction} from '@reduxjs/toolkit';
import {City} from '@/types/city';
import {SortOption} from "@/components/catalog/offers-sort/utils/const";

export const fillingOffers = createAction('offers/fillingOffers');

export const changeCity = createAction('cities/changeCity', (city: City) => ({
  payload: city,
}));

export const setSort = createAction('offers/setSortId', (id: SortOption) => ({
  payload: id,
}));

export const sortOffers = createAction('offers/sort');
