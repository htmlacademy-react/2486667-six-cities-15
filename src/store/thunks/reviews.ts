import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Endpoint} from '@/utils/const';
import {Review} from '@/types/reviews';

const fetchReviews = createAsyncThunk<Review[], string, { extra: AxiosInstance }>(
  'data/fetchFavorites',
  async (OfferId, { extra: api }) => {
    const {data} = await api.get<Review[]>(`${Endpoint.Reviews}/${OfferId}`);

    return data;
  },
);

const postReview = createAsyncThunk<void, string, { extra: AxiosInstance }>(
  'data/postFavoriteStatus',
  async (OfferId, { extra: api }) => {
    await api.post(`${Endpoint.Reviews}/${OfferId}`);
  },
);

export {fetchReviews, postReview};
