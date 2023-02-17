import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../../api-services/auth.service";
import { API_URL } from "../../config/axios.config";
import { AuthResponse } from "../../interfaces/AuthResponse";
import {
  removeTokenFromLocalStorage,
  removeUserFromLocalStorage,
  saveTokenToLocalStorage,
  saveUserToLocalStorage,
} from "../../utils/auth.utils";

interface AuthRequest {
  email: string;
  password: string;
}

export const login = createAsyncThunk<AuthResponse, AuthRequest>(
  "auth/login",
  async ({ email, password }, apiThunk) => {
    try {
      const response = await AuthService.login(email, password);

      saveTokenToLocalStorage(response.data.accessToken);
      saveUserToLocalStorage(response.data.user);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return apiThunk.rejectWithValue(error.response?.data.message);
      }
      return apiThunk.rejectWithValue("Error");
    }
  }
);

export const register = createAsyncThunk<AuthResponse, AuthRequest>(
  "auth/register",
  async ({ email, password }, apiThunk) => {
    try {
      const response = await AuthService.register(email, password);

      saveTokenToLocalStorage(response.data.accessToken);
      saveUserToLocalStorage(response.data.user);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return apiThunk.rejectWithValue(error.response?.data.message);
      }
      return apiThunk.rejectWithValue("Error");
    }
  }
);
// eslint-disable-next-line consistent-return
export const logout = createAsyncThunk("auth/logout", async (_, apiThunk) => {
  try {
    await AuthService.logout();
    removeTokenFromLocalStorage();
    removeUserFromLocalStorage();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return apiThunk.rejectWithValue(error.response?.data.message);
    }
    return apiThunk.rejectWithValue("Error");
  }
});

export const checkAuth = createAsyncThunk<AuthResponse>("auth/check", async (_, apiThunk) => {
  try {
    if (API_URL !== undefined) {
      const response = await axios.get<AuthResponse>(`${API_URL}auth/refresh`, {
        withCredentials: true,
      });

      saveTokenToLocalStorage(response.data.accessToken);
      saveUserToLocalStorage(response.data.user);

      return response.data;
    }
    throw new Error("Invalid API_URL");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return apiThunk.rejectWithValue(error.response?.data.message);
    }
    return apiThunk.rejectWithValue("Error");
  }
});
