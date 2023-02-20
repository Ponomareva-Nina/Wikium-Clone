export const getTokenFromLocalStorage = (): string | null => {
  return localStorage.getItem("accessToken");
};

export const saveTokenToLocalStorage = (token: string): void => {
  localStorage.setItem("accessToken", token);
};

export const removeTokenFromLocalStorage = (): void => {
  localStorage.removeItem("accessToken");
};
