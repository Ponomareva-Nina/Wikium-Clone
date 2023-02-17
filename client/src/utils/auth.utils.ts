import { User } from "../interfaces/User";

export const getTokenFromLocalStorage = (): string | null => {
  return localStorage.getItem("accessToken");
};

export const saveTokenToLocalStorage = (token: string): void => {
  localStorage.setItem("accessToken", token);
};

export const removeTokenFromLocalStorage = (): void => {
  localStorage.removeItem("accessToken");
};

export const getUserFromLocalStorage = (): null | User => {
  const user = localStorage.getItem("user");
  if (user === null) return null;
  return JSON.parse(user);
};

export const saveUserToLocalStorage = (user: User): void => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = (): void => {
  localStorage.removeItem("user");
};
