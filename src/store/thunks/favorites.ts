import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Offer} from '@/types/offer';
import {Endpoint} from '@/utils/const';
import {PostFavoriteStatusArgs} from '@/types/favorites';

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

export {postFavoriteStatus, fetchFavorites};