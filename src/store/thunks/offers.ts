import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Offer} from '@/types/offer';
import {Endpoint} from '@/utils/const';
import {PostFavoriteStatusArgs} from '@/types/favorites';

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
    const {data} = await api.get<Offer[]>(`${Endpoint.Offers}/${offerId}${Endpoint.Nearby}`);

    return data;
  },
);


const postFavoriteStatus = createAsyncThunk<void, PostFavoriteStatusArgs, { extra: AxiosInstance }>(
  'data/postFavoriteStatus',
  async (args, { extra: api }) => {

    await api.post(`${Endpoint.Favorite}/${args.offerId}/${args.favStatus}`);
  },
);

const fetchFavorites = createAsyncThunk<Offer[], undefined, { extra: AxiosInstance }>(
  'data/fetchFavorites',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<Offer[]>(Endpoint.Favorite);

    return data;
  },
);

export {fetchOffers, fetchOffer, fetchNearOffers, postFavoriteStatus, fetchFavorites};
