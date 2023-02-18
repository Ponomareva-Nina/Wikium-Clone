import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GameAttempt, User } from "../../interfaces/User";
import AuthService from "../../api-services/auth.service";
import { API_URL } from "../../config/axios.config";
import { AuthResponse } from "../../interfaces/AuthResponse";
import {
  removeTokenFromLocalStorage,
  removeUserFromLocalStorage,
  saveTokenToLocalStorage,
  saveUserToLocalStorage,
} from "../../utils/auth.utils";
import UserService from "../../api-services/user.service";

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

export const changeUserPassword = createAsyncThunk<
  void,
  { _id: string; oldPassword: string; newPassword: string }
>("user/password", async ({ _id, oldPassword, newPassword }, apiThunk) => {
  try {
    const response = await UserService.changePassword(_id, { oldPassword, newPassword });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return apiThunk.rejectWithValue(error.response?.data.message);
    }
    return apiThunk.rejectWithValue("Error");
  }
});

export const updateUserInformation = createAsyncThunk<
  User,
  {
    _id: string;
    name: string;
    surname: string;
    gender: string;
    birthDay: string;
    education: string;
  }
>("user/update", async (userData, apiThunk) => {
  try {
    const response = await UserService.updateInformation(userData._id, userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return apiThunk.rejectWithValue(error.response?.data.message);
    }
    return apiThunk.rejectWithValue("Error");
  }
});

export const updateUserAvatar = createAsyncThunk<
  string,
  {
    _id: string;
    files: FileList;
  }
>("user/avatar", async (userData, apiThunk) => {
  try {
    const response = await UserService.updateAvatar(userData._id, userData.files);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return apiThunk.rejectWithValue(error.response?.data.message);
    }
    return apiThunk.rejectWithValue("Error");
  }
});

export const addAttempt = createAsyncThunk<
  { _id: string; statistics: GameAttempt[] },
  { _id: string; attempt: GameAttempt }
>("user/attempt", async (attemptData, apiThunk) => {
  try {
    const response = await UserService.addAttempt(attemptData._id, attemptData.attempt);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return apiThunk.rejectWithValue(error.response?.data.message);
    }
    return apiThunk.rejectWithValue("Error");
  }
});
