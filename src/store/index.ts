import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {createAPI} from '@/services/api';
import {offersSlice} from '@/store/slices/offers';
import {usersSlice} from '@/store/slices/users';
import {offerSlice} from '@/store/slices/offer';
import {nearbySlice} from '@/store/slices/nearby';
import {favoritesSlice} from '@/store/slices/favorites';
import {reviewsSlice} from '@/store/slices/reviews';

const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
  [nearbySlice.name]: nearbySlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
  [reviewsSlice.name]: reviewsSlice.reducer,
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
