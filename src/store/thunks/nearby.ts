import {Offer} from '@/types/offer';
import {Endpoint} from '@/utils/const';
import {createAppAsyncThunk} from '@/hooks/store/store';

const fetchNearOffers = createAppAsyncThunk<Offer[], string>(
  'data/fetchNearOffers',
  async (offerId, { extra: api }) => {
    const {data} = await api.get<Offer[]>(`${Endpoint.Offers}/${offerId}${Endpoint.Nearby}`);

    return data;
  },
);

export {fetchNearOffers};
