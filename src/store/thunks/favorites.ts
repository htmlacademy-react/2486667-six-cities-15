import {Offer} from '@/types/offer';
import {Endpoint} from '@/utils/const';
import {PostFavoriteStatusArgs} from '@/types/favorites';
import {createAppAsyncThunk} from '@/hooks/store/store';

const postFavoriteStatus = createAppAsyncThunk<void, PostFavoriteStatusArgs>(
  'data/postFavoriteStatus',
  async (args, { extra: api }) => {

    await api.post(`${Endpoint.Favorite}/${args.offerId}/${args.favStatus}`);
  },
);

const fetchFavorites = createAppAsyncThunk<Offer[], undefined>(
  'data/fetchFavorites',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<Offer[]>(Endpoint.Favorite);

    return data;
  },
);

export {postFavoriteStatus, fetchFavorites};
