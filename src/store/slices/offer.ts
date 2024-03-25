import {Offer} from '@/types/offer';
import {RequestStatus} from '@/utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {fetchOffer} from '@/store/thunks/offer';

interface OfferState {
  offerData: Offer | null;
  status: RequestStatus;
}

const initialState: OfferState = {
  offerData: null,
  status: RequestStatus.Idle,
};

const offerSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchOffer.pending, (state: OfferState) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchOffer.fulfilled, (state: OfferState, action) => {
        state.status = RequestStatus.Success;
        state.offerData = action.payload;
      })
      .addCase(fetchOffer.rejected, (state: OfferState) => {
        state.status = RequestStatus.Failed;
      }),
  initialState,
  name: 'offer',
  reducers: {
    clear(state: OfferState) {
      state.offerData = null;
    }
  },
  selectors: {
    offer: (state: OfferState) => state.offerData,
    status: (state: OfferState) => state.status,
  },
});

const offerActions = {fetchOffer};
const offerSelectors = offerSlice.selectors;

export {offerActions, offerSelectors, offerSlice};
