import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/User";
import {
  checkAuth,
  login,
  logout,
  register,
  updateUserAvatar,
  updateUserInformation,
  addAttempt,
} from "./user.actions";

interface UserState {
  entity: User | null;
  isLoading: boolean;
}

const initialState: UserState = {
  entity: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.entity = action.payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.entity = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.entity = action.payload.user;
      })
      .addCase(register.rejected, (state) => {
        state.entity = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.entity = null;
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.entity = action.payload.user;
        state.isLoading = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.entity = null;
        state.isLoading = false;
      })
      .addCase(updateUserInformation.fulfilled, (state, action) => {
        state.entity = action.payload;
      })
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.entity = { ...(state.entity as User), avatar: action.payload };
      })
      .addCase(addAttempt.fulfilled, (state, action) => {
        state.entity = { ...(state.entity as User), statistics: action.payload.statistics };
      });
  },
});

export const { reducer } = userSlice;
