import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthData, UserData} from '@/types/user';
import {AxiosInstance} from 'axios';
import {Endpoint} from '@/utils/const';

const checkAuth = createAsyncThunk<UserData, undefined, { extra: AxiosInstance }>(
  'user/checkAuth',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<UserData>(Endpoint.Login);

    return data;
  },
);

const loginUser = createAsyncThunk<UserData, AuthData, { extra: AxiosInstance }>(
  'user/login',
  async ({login: email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(Endpoint.Login, {email, password});

    return data;
  },
);

const logoutUser = createAsyncThunk<void, undefined, { extra: AxiosInstance }>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(Endpoint.Logout);
  },
);

export {checkAuth, loginUser, logoutUser};
