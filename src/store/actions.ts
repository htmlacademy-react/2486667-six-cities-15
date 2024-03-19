import {createAction} from '@reduxjs/toolkit';
import {City} from '@/types/city';
import {Offer} from '@/types/offer';

export const fillingOffers = createAction<Array<Offer>>('offers/fillingOffers');

export const changeCity = createAction<{city: City}>('cities/changeCity');

export const setSortId = createAction<{id: number}>('offers/setSortId');

export const sortOffers = createAction('offers/sort');
