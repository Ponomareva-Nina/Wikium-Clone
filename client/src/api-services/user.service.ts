import { AxiosResponse } from "axios";
import { authAxiosInstance } from "../config/axios.config";
import { User } from "../interfaces/User";

export default class UserService {
  static async updateInformation(id: string, newData: Partial<User>): Promise<AxiosResponse<User>> {
    return authAxiosInstance.patch<User>(`user/${id}`, newData);
  }

  static async changePassword(
    id: string,
    passwordData: { oldPassword: string; newPassword: string }
  ): Promise<AxiosResponse<void>> {
    return authAxiosInstance.patch<void>(`user/password/${id}`, passwordData);
  }

  static async updateAvatar(id: string, files: FileList): Promise<AxiosResponse<string>> {
    const formData = new FormData();
    const filesArr = Object.values(files);

    filesArr.forEach((file) => {
      formData.append("files[]", file);
    });

    return authAxiosInstance.patch<string>(`user/avatar/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data; charset=utf-8",
      },
    });
  }
}
