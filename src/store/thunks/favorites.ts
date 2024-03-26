import {Offer} from '@/types/offer';
import {Endpoint} from '@/utils/const';
import {ChangeFavoriteArgs, ChangeFavoriteResponse} from '@/types/favorites';
import {createAppAsyncThunk} from '@/hooks/store/store';
import {OfferPreview} from '@/types/offer-preview';

const fetchFavorites = createAppAsyncThunk<Offer[], undefined>(
  'data/fetchFavorites',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<OfferPreview[]>(Endpoint.Favorite);

    return data;
  },
);

const changeFavorite = createAppAsyncThunk<ChangeFavoriteResponse, ChangeFavoriteArgs>(
  'data/changeFavorite',
  async ({offerId, status}, { extra: api }) => {
    const {data} = await api.post<OfferPreview>(`${Endpoint.Favorite}/${offerId}/${status}`);

    return {offer: data, status};
  },
);

export {fetchFavorites, changeFavorite};
