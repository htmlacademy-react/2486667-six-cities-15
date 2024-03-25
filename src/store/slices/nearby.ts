import {Offer} from '@/types/offer';
import {RequestStatus} from '@/utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {fetchNearOffers} from '@/store/thunks/nearby';

interface NearbyState {
  nearOffersData: Offer[];
  status: RequestStatus;
}

const initialState: NearbyState = {
  nearOffersData: [],
  status: RequestStatus.Idle,
};

const nearbySlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchNearOffers.pending, (state: NearbyState) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchNearOffers.fulfilled, (state: NearbyState, action) => {
        state.status = RequestStatus.Success;
        state.nearOffersData = action.payload;
      })
      .addCase(fetchNearOffers.rejected, (state: NearbyState) => {
        state.status = RequestStatus.Failed;
      }),
  initialState,
  name: 'nearby',
  reducers: {
    clear(state: NearbyState) {
      state.nearOffersData = [];
    }
  },
  selectors: {
    nearOffers: (state: NearbyState) => state.nearOffersData,
    status: (state: NearbyState) => state.status,
  },
});

const nearbyActions = {fetchNearOffers};
const nearbySelectors = nearbySlice.selectors;

export {nearbyActions, nearbySelectors, nearbySlice};
