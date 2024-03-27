import {Offer} from '@/types/offer';
import {RequestStatus} from '@/utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {fetchNearOffers} from '@/store/thunks/nearby';

interface NearbyState {
  nearOffers: Offer[];
  status: RequestStatus;
}

const initialState: NearbyState = {
  nearOffers: [],
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
        state.nearOffers = action.payload;
      })
      .addCase(fetchNearOffers.rejected, (state: NearbyState) => {
        state.status = RequestStatus.Failed;
      }),
  initialState,
  name: 'nearby',
  reducers: {
    clear(state: NearbyState) {
      state.nearOffers = [];
    }
  },
  selectors: {
    nearOffers: (state: NearbyState) => state.nearOffers,
    status: (state: NearbyState) => state.status,
  },
});

const nearbyActions = {fetchNearOffers};
const nearbySelectors = nearbySlice.selectors;

export {nearbyActions, nearbySelectors, nearbySlice};
