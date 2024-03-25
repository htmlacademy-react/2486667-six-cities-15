import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Offer} from '@/types/offer';
import {Endpoint} from '@/utils/const';

const fetchNearOffers = createAsyncThunk<Offer[], string, { extra: AxiosInstance }>(
  'data/fetchNearOffers',
  async (offerId, { extra: api }) => {
    const {data} = await api.get<Offer[]>(`${Endpoint.Offers}/${offerId}${Endpoint.Nearby}`);

    return data;
  },
);

export {fetchNearOffers};
