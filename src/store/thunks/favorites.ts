import {Offer} from '@/types/offer';
import {Endpoint} from '@/utils/const';
import {ChangeFavoriteArgs} from '@/types/favorites';
import {createAppAsyncThunk} from '@/hooks/store/store';

const fetchFavorites = createAppAsyncThunk<Offer[], undefined>(
  'data/fetchFavorites',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<Offer[]>(Endpoint.Favorite);

    return data;
  },
);

const changeFavorite = createAppAsyncThunk<void, ChangeFavoriteArgs>(
  'data/changeFavorite',
  async (args, { extra: api }) => {

    await api.post(`${Endpoint.Favorite}/${args.offerId}/${args.favStatus}`);
  },
);

export {fetchFavorites, changeFavorite};
