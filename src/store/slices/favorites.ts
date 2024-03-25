import {Offer} from '@/types/offer';
import {RequestStatus} from '@/utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {fetchFavorites, postFavoriteStatus} from '@/store/thunks/favorites';

interface FavoritesState {
  favoritesData: Offer[];
  getStatus: RequestStatus;
  postStatus: RequestStatus;
}

const initialState: FavoritesState = {
  favoritesData: [],
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
        state.favoritesData = action.payload;
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
      state.favoritesData = [];
      state.getStatus = RequestStatus.Idle;
      state.postStatus = RequestStatus.Idle;
    }
  },
  selectors: {
    favorites: (state) => state.favoritesData,
  },
});

const favoritesActions = {...favoritesSlice.actions, postFavoriteStatus, fetchFavorites};
const favoritesSelectors = favoritesSlice.selectors;

export {favoritesActions, favoritesSelectors, favoritesSlice};
