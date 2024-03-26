import {Offer} from '@/types/offer';
import {Endpoint} from '@/utils/const';
import {createAppAsyncThunk} from '@/hooks/store/store';

const fetchOffers = createAppAsyncThunk<Offer[], undefined>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<Offer[]>(Endpoint.Offers);

    return data;
  },
);

export {fetchOffers};
