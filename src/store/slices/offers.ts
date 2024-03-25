import {Offer} from '@/types/offer';
import {City} from '@/types/city';
import {DEFAULT_CITY, RequestStatus, SORT_OPTION_DEFAULT} from '@/utils/const';
import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortOption} from '@/components/catalog/offers-sort/utils/const';
import {fetchFavorites, fetchOffers, postFavoriteStatus} from '@/store/thunks/offers';

interface OffersState {
  offersData: Offer[];
  favoritesData: Offer[];
  currentCity: City;
  sortOption: SortOption;
  status: RequestStatus;
  favoriteDataStatus: RequestStatus;
  favoriteStatus: RequestStatus;
}

const initialState: OffersState = {
  offersData: [],
  favoritesData: [],
  currentCity: DEFAULT_CITY,
  sortOption: SORT_OPTION_DEFAULT,
  status: RequestStatus.Idle,
  favoriteDataStatus: RequestStatus.Idle,
  favoriteStatus: RequestStatus.Idle,
};

const offersSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchOffers.pending, (state: OffersState) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchOffers.fulfilled, (state: OffersState, action) => {
        state.status = RequestStatus.Success;
        state.offersData = action.payload;
      })
      .addCase(fetchOffers.rejected, (state: OffersState) => {
        state.status = RequestStatus.Failed;
      })

      .addCase(fetchFavorites.pending, (state: OffersState) => {
        state.favoriteDataStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavorites.fulfilled, (state: OffersState, action) => {
        state.favoriteDataStatus = RequestStatus.Success;
        state.favoritesData = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state: OffersState) => {
        state.favoriteDataStatus = RequestStatus.Failed;
      })

      .addCase(postFavoriteStatus.pending, (state: OffersState) => {
        state.favoriteStatus = RequestStatus.Loading;
      })
      .addCase(postFavoriteStatus.fulfilled, (state: OffersState) => {
        state.favoriteStatus = RequestStatus.Success;
      })
      .addCase(postFavoriteStatus.rejected, (state: OffersState) => {
        state.favoriteStatus = RequestStatus.Failed;
      }),
  initialState,
  name: 'offers',
  reducers: {
    setCity: (state, action: PayloadAction<City>) => {
      state.currentCity = action.payload;
    },
    setSortOption: (state, action: PayloadAction<SortOption>) => {
      state.sortOption = action.payload;
    },
  },
  selectors: {
    offers: (state: OffersState) => state.offersData,
    city: (state: OffersState) => state.currentCity,
    sortOption: (state: OffersState) => state.sortOption,
    status: (state) => state.status,
    favorites: (state) => state.favoritesData,
  },
});

const offersActions = {...offersSlice.actions, fetchOffers, postFavoriteStatus, fetchFavorites};
const offersSelectors = {
  ...offersSlice.selectors,
  cityOffers: createSelector(offersSlice.selectors.offers, offersSlice.selectors.city, (allOffers, city) =>
    allOffers.filter((item) => item.city.name === city.name))
};

export {offersActions, offersSelectors, offersSlice};
