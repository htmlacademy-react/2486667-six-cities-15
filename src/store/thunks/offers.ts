import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Offer} from '@/types/offer';
import {Endpoint} from '@/utils/const';

const fetchOffers = createAsyncThunk<Offer[], undefined, { extra: AxiosInstance }>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<Offer[]>(Endpoint.Offers);

    return data;
  },
);

const fetchOffer = createAsyncThunk<Offer, string, { extra: AxiosInstance }>(
  'data/fetchOffer',
  async (offerId, { extra: api }) => {
    const {data} = await api.get<Offer>(Endpoint.Offer + offerId);

    return data;
  },
);

const fetchNearOffers = createAsyncThunk<Offer[], string, { extra: AxiosInstance }>(
  'data/fetchNearOffers',
  async (offerId, { extra: api }) => {
    const {data} = await api.get<Offer[]>(`${Endpoint.Offers }/${ offerId }${Endpoint.Nearby}`);

    return data;
  },
);

export {fetchOffers, fetchOffer, fetchNearOffers};
