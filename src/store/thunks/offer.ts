import {Offer} from '@/types/offer';
import {Endpoint} from '@/utils/const';
import {createAppAsyncThunk} from '@/hooks/store/store';

const fetchOffer = createAppAsyncThunk<Offer, string>(
  'data/fetchOffer',
  async (offerId, { extra: api }) => {
    const {data} = await api.get<Offer>(Endpoint.Offer + offerId);

    return data;
  },
);

export {fetchOffer};
