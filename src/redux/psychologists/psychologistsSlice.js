import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchAllPsychologists,
  fetchPsychologistsByFilterAll,
  fetchPsychologistsFirstThree,
  fetchPsychologistsFirstThreeReverse,
  fetchPsychologistsByFilterAllReverse,
} from "./psychologistsOperations";

const initilaValue = {
  items: [],
  isLoading: false,
  error: null,
};

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState: initilaValue,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPsychologists.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchPsychologistsFirstThree.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchPsychologistsByFilterAll.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(
        fetchPsychologistsFirstThreeReverse.fulfilled,
        (state, action) => {
          state.items = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(
        fetchPsychologistsByFilterAllReverse.fulfilled,
        (state, action) => {
          state.items = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchAllPsychologists.pending,
          fetchPsychologistsByFilterAll.pending,
          fetchPsychologistsFirstThree.pending,
          fetchPsychologistsFirstThreeReverse.pending,
          fetchPsychologistsByFilterAllReverse.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllPsychologists.rejected,
          fetchPsychologistsByFilterAll.rejected,
          fetchPsychologistsFirstThree.rejected,
          fetchPsychologistsFirstThreeReverse.rejected,
          fetchPsychologistsByFilterAllReverse.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const psychologistsReducer = psychologistsSlice.reducer;
