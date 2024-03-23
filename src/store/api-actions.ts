import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '@/types/state';
import {AxiosInstance} from 'axios';
import {Offer} from '@/types/offer';
import {APIRoute, AuthStatus} from '@/utils/const';
import {
  loadOffer,
  loadOffers,
  requireAuth,
  setOffersDataLoadingStatus, setUserData
} from '@/store/actions';
import {AuthData, UserData} from '@/types/user';
import {removeToken, setToken} from '@/services/token';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuth(AuthStatus.Auth));
      dispatch(setUserData(data));
    } catch {
      dispatch(requireAuth(AuthStatus.NoAuth));
      dispatch(setUserData(null));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    const {token} = data;
    setToken(token);
    dispatch(requireAuth(AuthStatus.Auth));
    dispatch(setUserData(data));
    //dispatch(redirectToRoute(AppRoute.Root)); // TODO перенаправление в защищенном компоненте, удалить middleware redirect
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    removeToken();
    dispatch(requireAuth(AuthStatus.NoAuth));
    dispatch(setUserData(null));
  },
);
