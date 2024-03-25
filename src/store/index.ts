import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createAPI} from '@/services/api';
import {offersSlice} from '@/store/slices/offers';
import {usersSlice} from '@/store/slices/users';

const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: createAPI(),
      },
    }),
});
