import {createAction} from '@reduxjs/toolkit';
import {City} from '@/types/city';
import {SortOption} from '@/components/catalog/offers-sort/utils/const';
import {AuthStatus} from '@/utils/const';

export const fillingOffers = createAction('offers/fillingOffers');

export const changeCity = createAction('cities/changeCity', (city: City) => ({
  payload: city,
}));

export const setSortOption = createAction('offers/setSortOption', (sortOption: SortOption) => ({
  payload: sortOption,
}));

export const requireAuth = createAction<AuthStatus>('user/requireAuth');
