import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllData,
  getDataByFilterAll,
  getDataByFilterFirstThree,
  getDataByFilterFirstThreeReverse,
  getDataByFilterReverse,
} from "../../services/psychologists";

export const fetchAllPsychologists = createAsyncThunk(
  "psychologists/fetchAllPsychologists",
  async (_, thunkApi) => {
    try {
      const response = await getAllData();

      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchPsychologistsFirstThree = createAsyncThunk(
  "psychologists/fetchPsychologistsFirstThree",
  async (credentials, thunkApi) => {
    try {
      const response = await getDataByFilterFirstThree(credentials);

      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchPsychologistsByFilterAll = createAsyncThunk(
  "psychologists/fetchPsychologistsByFilterAll",
  async (credentials, thunkApi) => {
    try {
      const response = await getDataByFilterAll(credentials);

      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchPsychologistsFirstThreeReverse = createAsyncThunk(
  "psychologists/fetchPsychologistsFirstThreeReverse",
  async (credentials, thunkApi) => {
    try {
      const response = await getDataByFilterFirstThreeReverse(credentials);

      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchPsychologistsByFilterAllReverse = createAsyncThunk(
  "psychologists/fetchPsychologistsByFilterAllReverse",
  async (credentials, thunkApi) => {
    try {
      const response = await getDataByFilterReverse(credentials);

      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
