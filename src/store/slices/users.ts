import {AuthStatus, RequestStatus} from '@/utils/const';
import {UserData} from '@/types/user';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {checkAuth, loginUser, logoutUser} from '@/store/thunks/users';
import {dropToken, saveToken} from '@/services/token';


interface UsersState {
  user: UserData | null;
  status: AuthStatus;
  requestStatus: RequestStatus;
}

const initialState: UsersState = {
  user: null,
  status: AuthStatus.Unknown,
  requestStatus: RequestStatus.Idle,
};

function processLoading(state: UsersState) {
  state.requestStatus = RequestStatus.Loading;
}

function processFailed(state: UsersState) {
  state.status = AuthStatus.NoAuth;
  state.requestStatus = RequestStatus.Failed;
}

const usersSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(checkAuth.pending, processLoading)
      .addCase(checkAuth.fulfilled, (state: UsersState, action) => {
        state.user = action.payload;
        state.status = AuthStatus.Auth;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(checkAuth.rejected, processFailed)

      .addCase(loginUser.pending, processLoading)
      .addCase(loginUser.fulfilled, (state: UsersState, action) => {
        state.user = action.payload;
        state.status = AuthStatus.Auth;
        saveToken(action.payload.token);
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(loginUser.rejected, processFailed)

      .addCase(logoutUser.pending, processLoading)
      .addCase(logoutUser.fulfilled, (state: UsersState) => {
        state.user = null;
        state.status = AuthStatus.NoAuth;
        dropToken();
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(logoutUser.rejected, (state: UsersState) => {
        state.requestStatus = RequestStatus.Failed;
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

const usersActions = {...usersSlice.actions, checkAuth, loginUser, logoutUser};
const usersSelectors = usersSlice.selectors;

export {usersActions, usersSelectors, usersSlice};
