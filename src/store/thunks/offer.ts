import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Offer} from '@/types/offer';
import {Endpoint} from '@/utils/const';

const fetchOffer = createAsyncThunk<Offer, string, { extra: AxiosInstance }>(
  'data/fetchOffer',
  async (offerId, { extra: api }) => {
    const {data} = await api.get<Offer>(Endpoint.Offer + offerId);

    return data;
  },
);

export {fetchOffer};
