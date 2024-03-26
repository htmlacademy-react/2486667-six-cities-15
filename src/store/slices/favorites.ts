import {Offer} from '@/types/offer';
import {RequestStatus} from '@/utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {changeFavorite, fetchFavorites} from '@/store/thunks/favorites';

interface FavoritesState {
  favorites: Offer[];
  getStatus: RequestStatus;
  postStatus: RequestStatus;
}

const initialState: FavoritesState = {
  favorites: [],
  getStatus: RequestStatus.Idle,
  postStatus: RequestStatus.Idle,
};

const favoritesSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchFavorites.pending, (state: FavoritesState) => {
        state.getStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavorites.fulfilled, (state: FavoritesState, action) => {
        state.favorites = action.payload;
        state.getStatus = RequestStatus.Success;
      })
      .addCase(fetchFavorites.rejected, (state: FavoritesState) => {
        state.getStatus = RequestStatus.Failed;
      })

      .addCase(changeFavorite.pending, (state: FavoritesState) => {
        state.postStatus = RequestStatus.Loading;
      })
      .addCase(changeFavorite.fulfilled, (state: FavoritesState) => {
        state.postStatus = RequestStatus.Success;
      })
      .addCase(changeFavorite.rejected, (state: FavoritesState) => {
        state.postStatus = RequestStatus.Failed;
      }),
  initialState,
  name: 'favorites',
  reducers: {
    clear(state: FavoritesState) {
      state.favorites = [];
      state.getStatus = RequestStatus.Idle;
      state.postStatus = RequestStatus.Idle;
    }
  },
  selectors: {
    favorites: (state: FavoritesState) => state.favorites,
    status: (state: FavoritesState) => state.getStatus,
  },
});

const favoritesActions = {...favoritesSlice.actions, changeFavorite, fetchFavorites};
const favoritesSelectors = favoritesSlice.selectors;

export {favoritesActions, favoritesSelectors, favoritesSlice};
