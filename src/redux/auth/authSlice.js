import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { LogOut, logIn, register } from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
      })

      .addCase(LogOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = false;
      })

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
      })

      .addMatcher(
        isAnyOf(register.pending, LogOut.pending, logIn.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
          state.isLoggedIn = false;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, LogOut.rejected, logIn.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.isLoggedIn = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
