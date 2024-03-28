import {Endpoint} from '@/utils/const';
import {PostReviewArg, Review} from '@/types/reviews';
import {createAppAsyncThunk} from '@/hooks/store/store';

const fetchReviews = createAppAsyncThunk<Review[], string>(
  'data/fetchReviews',
  async (OfferId, { extra: api }) => {
    const {data} = await api.get<Review[]>(`${Endpoint.Reviews}/${OfferId}`);

    return data;
  },
);

const postReview = createAppAsyncThunk<Review, PostReviewArg>(
  'data/postReview',
  async (args, { extra: api }) => {
    const {data} = await api.post<Review>(`${Endpoint.Reviews}/${args.offerId}`, {comment: args.comment, rating: args.rating});

    return data;
  },
);

export {fetchReviews, postReview};
