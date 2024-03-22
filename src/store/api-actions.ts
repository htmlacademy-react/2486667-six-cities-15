import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '@/types/state';
import {AxiosInstance} from 'axios';
import {Offer} from '@/types/offer';
import {APIRoute} from '@/utils/const';
import {loadOffer, loadOffers} from '@/store/actions';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(APIRoute.Offer + offerId);
    dispatch(loadOffer(data));
  },
);
