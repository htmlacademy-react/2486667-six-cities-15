import {Offer} from '@/types/offer';
import {RequestStatus} from '@/utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {fetchFavorites, postFavoriteStatus} from '@/store/thunks/favorites';

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
        state.getStatus = RequestStatus.Success;
        state.favorites = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state: FavoritesState) => {
        state.getStatus = RequestStatus.Failed;
      })

      .addCase(postFavoriteStatus.pending, (state: FavoritesState) => {
        state.postStatus = RequestStatus.Loading;
      })
      .addCase(postFavoriteStatus.fulfilled, (state: FavoritesState) => {
        state.postStatus = RequestStatus.Success;
      })
      .addCase(postFavoriteStatus.rejected, (state: FavoritesState) => {
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

const favoritesActions = {...favoritesSlice.actions, postFavoriteStatus, fetchFavorites};
const favoritesSelectors = favoritesSlice.selectors;

export {favoritesActions, favoritesSelectors, favoritesSlice};
