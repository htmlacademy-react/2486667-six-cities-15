import {AuthData, UserData} from '@/types/user';
import {Endpoint} from '@/utils/const';
import {createAppAsyncThunk} from '@/hooks/store/store';
import {dropToken, saveToken} from '@/services/token';

const checkAuth = createAppAsyncThunk<UserData, undefined>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(Endpoint.Login);

    return data;
  },
);

const loginUser = createAppAsyncThunk<UserData, AuthData>(
  'user/login',
  async ({login: email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(Endpoint.Login, {email, password});
    saveToken(data.token);

    return data;
  },
);

const logoutUser = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(Endpoint.Logout);
    dropToken();
  },
);

export {checkAuth, loginUser, logoutUser};
