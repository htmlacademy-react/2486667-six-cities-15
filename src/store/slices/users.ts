import {AuthStatus} from '@/utils/const';
import {UserData} from '@/types/user';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {checkAuth, loginUser, logoutUser} from '@/store/thunks/users';
import {dropToken, saveToken} from '@/services/token';


interface UsersState {
  user: UserData | null;
  status: AuthStatus;
}

const initialState: UsersState = {
  user: null,
  status: AuthStatus.Unknown,
};

const usersSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(checkAuth.pending, (state: UsersState) => {
        state.status = AuthStatus.Unknown;
      })
      .addCase(checkAuth.fulfilled, (state: UsersState, action) => {
        state.status = AuthStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state: UsersState) => {
        state.status = AuthStatus.NoAuth;
        state.user = null;
      })
      .addCase(loginUser.pending, () => {

      })
      .addCase(loginUser.fulfilled, (state: UsersState, action) => {
        saveToken(action.payload.token);
        state.status = AuthStatus.Auth;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state: UsersState) => {
        state.status = AuthStatus.NoAuth;
        state.user = null;
      })
      .addCase(logoutUser.pending, () => {

      })
      .addCase(logoutUser.fulfilled, (state: UsersState) => {
        dropToken();
        state.status = AuthStatus.NoAuth;
        state.user = null;
      })
      .addCase(logoutUser.rejected, () => {

      }),
  initialState,
  name: 'users',
  reducers: {
    setUser: (state, action: PayloadAction<UserData | null>) => {
      state.user = action.payload;
    },
    requireAuth: (state, action: PayloadAction<AuthStatus>) => {
      state.status = action.payload;
    },
  },
  selectors: {
    user: (state: UsersState) => state.user,
    status: (state: UsersState) => state.status,
  },
});

const usersActions = usersSlice.actions;
const usersSelectors = usersSlice.selectors;

export {usersActions, usersSelectors, usersSlice};
