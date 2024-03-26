import {Endpoint} from '@/utils/const';
import {Review} from '@/types/reviews';
import {createAppAsyncThunk} from '@/hooks/store/store';

const fetchReviews = createAppAsyncThunk<Review[], string>(
  'data/fetchFavorites',
  async (OfferId, { extra: api }) => {
    const {data} = await api.get<Review[]>(`${Endpoint.Reviews}/${OfferId}`);

    return data;
  },
);

const postReview = createAppAsyncThunk<void, string>(
  'data/postFavoriteStatus',
  async (OfferId, { extra: api }) => {
    await api.post(`${Endpoint.Reviews}/${OfferId}`);
  },
);

export {fetchReviews, postReview};
