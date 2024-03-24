import {Offer} from '@/types/offer';
import {City} from '@/types/city';
import {DEFAULT_CITY, RequestStatus, SORT_OPTION_DEFAULT} from '@/utils/const';
import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortOption} from '@/components/catalog/offers-sort/utils/const';
import {fetchFavorites, fetchNearOffers, fetchOffer, fetchOffers, postFavoriteStatus} from '@/store/thunks/offers';

interface OffersState {
  offersData: Offer[];
  offerData: Offer | null;
  nearOffersData: Offer[];
  favoritesData: Offer[];
  currentCity: City;
  sortOption: SortOption;
  status: RequestStatus;
  offerStatus: RequestStatus;
  nearStatus: RequestStatus;
  favoriteDataStatus: RequestStatus;
  favoriteStatus: RequestStatus;
}

const initialState: OffersState = {
  offersData: [],
  offerData: null,
  nearOffersData: [],
  favoritesData: [],
  currentCity: DEFAULT_CITY,
  sortOption: SORT_OPTION_DEFAULT,
  status: RequestStatus.Idle,
  offerStatus: RequestStatus.Idle,
  nearStatus: RequestStatus.Idle,
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

      .addCase(fetchOffer.pending, (state: OffersState) => {
        state.offerStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffer.fulfilled, (state: OffersState, action) => {
        state.offerStatus = RequestStatus.Success;
        state.offerData = action.payload;
      })
      .addCase(fetchOffer.rejected, (state: OffersState) => {
        state.offerStatus = RequestStatus.Failed;
      })

      .addCase(fetchNearOffers.pending, (state: OffersState) => {
        state.nearStatus = RequestStatus.Loading;
      })
      .addCase(fetchNearOffers.fulfilled, (state: OffersState, action) => {
        state.nearStatus = RequestStatus.Success;
        state.nearOffersData = action.payload;
      })
      .addCase(fetchNearOffers.rejected, (state: OffersState) => {
        state.nearStatus = RequestStatus.Failed;
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
    offer: (state: OffersState) => state.offerData,
    nearOffers: (state: OffersState) => state.nearOffersData,
    city: (state: OffersState) => state.currentCity,
    sortOption: (state: OffersState) => state.sortOption,
    status: (state) => state.status,
    offerStatus: (state) => state.offerStatus,
    nearStatus: (state) => state.nearStatus,
    favorites: (state) => state.favoritesData,
  },
});

const offersActions = offersSlice.actions;
const offersSelectors = {
  ...offersSlice.selectors,
  cityOffers: createSelector(offersSlice.selectors.offers, offersSlice.selectors.city, (allOffers, city) =>
    allOffers.filter((item) => item.city.name === city.name))
};

export {offersActions, offersSelectors, offersSlice};
