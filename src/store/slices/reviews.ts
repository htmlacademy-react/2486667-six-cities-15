import {RequestStatus} from '@/utils/const';
import {createSlice} from '@reduxjs/toolkit';
import {Review} from '@/types/reviews';
import {fetchReviews, postReview} from '@/store/thunks/reviews';

interface ReviewsState {
  reviews: Review[];
  getStatus: RequestStatus;
  postStatus: RequestStatus;
}

const initialState: ReviewsState = {
  reviews: [],
  getStatus: RequestStatus.Idle,
  postStatus: RequestStatus.Idle,
};

const reviewsSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchReviews.pending, (state: ReviewsState) => {
        state.getStatus = RequestStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state: ReviewsState, action) => {
        state.getStatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state: ReviewsState) => {
        state.getStatus = RequestStatus.Failed;
      })

      .addCase(postReview.pending, (state: ReviewsState) => {
        state.postStatus = RequestStatus.Loading;
      })
      .addCase(postReview.fulfilled, (state: ReviewsState, action) => {
        state.postStatus = RequestStatus.Success;
        state.reviews.push(action.payload);
      })
      .addCase(postReview.rejected, (state: ReviewsState) => {
        state.postStatus = RequestStatus.Failed;
      }),
  initialState,
  name: 'reviews',
  reducers: {
    clear(state: ReviewsState) {
      state.reviews = [];
      state.getStatus = RequestStatus.Idle;
      state.postStatus = RequestStatus.Idle;
    },
  },
  selectors: {
    reviews: (state: ReviewsState) => state.reviews,
    status: (state: ReviewsState) => state.getStatus,
  },
});

const reviewsActions = {...reviewsSlice.actions, fetchReviews, postReview};
const reviewsSelectors = reviewsSlice.selectors;

export {reviewsActions, reviewsSelectors, reviewsSlice};
