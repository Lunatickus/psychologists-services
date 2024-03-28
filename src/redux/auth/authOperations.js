import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  logOutDb,
  loginDB,
  registerDB,
  updateUserProfile,
} from "../../services/auth.js";
import { toastError, toastSuccess } from "../../services/toastNotifications.js";

export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      await registerDB({ email, password });
      await updateUserProfile({ displayName: name });
      const resp = await getCurrentUser();
      toastSuccess("Registration successful");
      return {
        name: resp.displayName,
        email: resp.email,
      };
    } catch (error) {
      toastError("user already exist");
      return rejectWithValue(error.message);
    }
  }
);

export const LogOut = createAsyncThunk(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await logOutDb();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      await loginDB({ email, password });
      const resp = await getCurrentUser();
      toastSuccess(`Welcome ${email}`);
      return {
        name: resp.displayName,
        email: resp.email,
      };
    } catch (error) {
      toastError("Wrong email or password");
      return rejectWithValue(error.message);
    }
  }
);
