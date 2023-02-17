import axios from "axios";
import { AuthResponse } from "../interfaces/AuthResponse";

import {
  getTokenFromLocalStorage,
  saveTokenToLocalStorage,
  saveUserToLocalStorage,
} from "../utils/auth.utils";

export const API_URL = process.env.REACT_APP_API_URL;

export const authAxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

authAxiosInstance.interceptors.request.use((config) => {
  const accessToken = getTokenFromLocalStorage();
  if (accessToken === null) return config;

  if (config.headers !== undefined) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

authAxiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  // eslint-disable-next-line consistent-return
  async (error) => {
    if (API_URL !== undefined) {
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        error.config !== undefined &&
        error.config_isRetry !== true
      ) {
        // eslint-disable-next-line no-underscore-dangle
        originalRequest._isRetry = true;
        try {
          const response = await axios.get<AuthResponse>(`${API_URL}auth/refresh`, {
            withCredentials: true,
          });
          saveTokenToLocalStorage(response.data.accessToken);
          saveUserToLocalStorage(response.data.user);
          return await authAxiosInstance.request(originalRequest);
        } catch (err) {
          console.log("Auth err");
        }
      }
    } else {
      throw new Error("Invalid API_URL");
    }
  }
);
