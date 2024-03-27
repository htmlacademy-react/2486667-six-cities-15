import {AuthStatus, RequestStatus} from '@/utils/const';
import {UserData} from '@/types/user';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {checkAuth, loginUser, logoutUser} from '@/store/thunks/users';

interface UsersState {
  user: UserData | null;
  authorizationStatus: AuthStatus;
  requestStatus: RequestStatus;
}

const initialState: UsersState = {
  user: null,
  authorizationStatus: AuthStatus.Unknown,
  requestStatus: RequestStatus.Idle,
};

function processLoading(state: UsersState) {
  state.requestStatus = RequestStatus.Loading;
}

function processFulfilled(state: UsersState, action: PayloadAction<UserData>) {
  state.user = action.payload;
  state.authorizationStatus = AuthStatus.Auth;
  state.requestStatus = RequestStatus.Success;
}

function processFailed(state: UsersState) {
  state.authorizationStatus = AuthStatus.NoAuth;
  state.requestStatus = RequestStatus.Failed;
}

const usersSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(checkAuth.pending, processLoading)
      .addCase(checkAuth.fulfilled, processFulfilled)
      .addCase(checkAuth.rejected, processFailed)

      .addCase(loginUser.pending, processLoading)
      .addCase(loginUser.fulfilled, processFulfilled)
      .addCase(loginUser.rejected, processFailed)

      .addCase(logoutUser.pending, processLoading)
      .addCase(logoutUser.fulfilled, (state: UsersState) => {
        state.user = null;
        state.authorizationStatus = AuthStatus.NoAuth;
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
    authorizationStatus: (state: UsersState) => state.authorizationStatus,
  },
});

const usersActions = {...usersSlice.actions, checkAuth, loginUser, logoutUser};
const usersSelectors = usersSlice.selectors;

export {usersActions, usersSelectors, usersSlice};
