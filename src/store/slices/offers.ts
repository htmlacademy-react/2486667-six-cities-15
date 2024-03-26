import {Offer} from '@/types/offer';
import {City} from '@/types/city';
import {DEFAULT_CITY, RequestStatus, SORT_OPTION_DEFAULT} from '@/utils/const';
import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortOption} from '@/components/catalog/offers-sort/utils/const';
import {fetchOffers} from '@/store/thunks/offers';
import {ChangeFavoriteArgs} from '@/types/favorites';

interface OffersState {
  offers: Offer[];
  city: City;
  sortOption: SortOption;
  status: RequestStatus;
}

const initialState: OffersState = {
  offers: [],
  city: DEFAULT_CITY,
  sortOption: SORT_OPTION_DEFAULT,
  status: RequestStatus.Idle,
};

const offersSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchOffers.pending, (state: OffersState) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchOffers.fulfilled, (state: OffersState, action) => {
        state.status = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state: OffersState) => {
        state.status = RequestStatus.Failed;
      }),
  initialState,
  name: 'offers',
  reducers: {
    setCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    setSortOption: (state, action: PayloadAction<SortOption>) => {
      state.sortOption = action.payload;
    },
    updateFavoriteStatus: (state, action: PayloadAction<ChangeFavoriteArgs>) => {
      state.offers = state.offers.map((item) => {
        if (item.id === action.payload.offerId) {
          return {
            ...item,
            isFavorite: !!action.payload.status,
          };
        }
        return item;
      });
    }
  },
  selectors: {
    offers: (state: OffersState) => state.offers,
    city: (state: OffersState) => state.city,
    sortOption: (state: OffersState) => state.sortOption,
    status: (state) => state.status,
  },
});

const offersActions = {...offersSlice.actions, fetchOffers};
const offersSelectors = {
  ...offersSlice.selectors,
  cityOffers: createSelector(offersSlice.selectors.offers, offersSlice.selectors.city, (allOffers, city) =>
    allOffers.filter((item) => item.city.name === city.name))
};

export {offersActions, offersSelectors, offersSlice};
