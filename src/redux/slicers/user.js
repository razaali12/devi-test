// @flow
import _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import Immutable from "seamless-immutable";
import { cloneDeepItem } from "../../services/utils";

const initialState = Immutable({
  data: {},
  isAuthenticated: false,
  isError: null,
});

const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest(state, action) {},
    loginsuccess(state, action) {
      console.log({ action });
      state.data = { ...action?.payload };
      state.isAuthenticated = true;
    },

    // USER SIGNOUT
    userSignOutSuccess(state) {
      console.log("baby");
      state.data = {};
      state.isAuthenticated = false;
      state.isError = null;

      localStorage.removeItem("token");
    },
  },
});

export const { userSignOutSuccess, loginRequest, loginsuccess } =
  UserReducer.actions;

export default UserReducer.reducer;
