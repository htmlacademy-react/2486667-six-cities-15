import {RequestStatus} from '@/utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {changeFavorite, fetchFavorites} from '@/store/thunks/favorites';
import {FavoriteStatus} from '@/types/favorites';
import {OfferPreview} from '@/types/offer-preview';

interface FavoritesState {
  favorites: OfferPreview[];
  status: RequestStatus;
  changeStatus: RequestStatus;
}

const initialState: FavoritesState = {
  favorites: [],
  status: RequestStatus.Idle,
  changeStatus: RequestStatus.Idle,
};

const favoritesSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchFavorites.pending, (state: FavoritesState) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchFavorites.fulfilled, (state: FavoritesState, action) => {
        state.favorites = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchFavorites.rejected, (state: FavoritesState) => {
        state.status = RequestStatus.Failed;
      })

      .addCase(changeFavorite.pending, (state: FavoritesState) => {
        state.changeStatus = RequestStatus.Loading;
      })
      .addCase(changeFavorite.fulfilled, (state: FavoritesState, action) => {
        state.changeStatus = RequestStatus.Success;

        switch (action.payload.status) {
          case FavoriteStatus.Add:
            state.favorites.push(action.payload.offer);
            break;
          case FavoriteStatus.Remove:
            state.favorites = state.favorites.filter(({id}) => id !== action.payload.offer.id);
            break;
        }
      })
      .addCase(changeFavorite.rejected, (state: FavoritesState) => {
        state.changeStatus = RequestStatus.Failed;
      }),
  initialState,
  name: 'favorites',
  reducers: {
    clear(state: FavoritesState) {
      state.favorites = [];
      state.status = RequestStatus.Idle;
      state.changeStatus = RequestStatus.Idle;
    }
  },
  selectors: {
    favorites: (state: FavoritesState) => state.favorites,
    status: (state: FavoritesState) => state.status,
  },
});

const favoritesActions = {...favoritesSlice.actions, changeFavorite, fetchFavorites};
const favoritesSelectors = favoritesSlice.selectors;

export {favoritesActions, favoritesSelectors, favoritesSlice};
