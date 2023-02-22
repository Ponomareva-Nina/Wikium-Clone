import { AxiosResponse } from "axios";
import { authAxiosInstance, axiosInstance } from "../config/axios.config";
import { AuthResponse } from "../interfaces/AuthResponse";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return axiosInstance.post<AuthResponse>("auth/login", {
      email,
      password,
    });
  }

  static async register(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return axiosInstance.post<AuthResponse>("auth/register", {
      email,
      password,
    });
  }

  static async logout(): Promise<AxiosResponse> {
    return authAxiosInstance.get("auth/logout");
  }
}
