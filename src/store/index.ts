import {configureStore} from '@reduxjs/toolkit';
import {reducer} from '@/store/reducer';
import {createAPI} from '@/services/api';
import {redirect} from '@/store/middlewares/redirect';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: createAPI(),
      },
    }).concat(redirect),
});
