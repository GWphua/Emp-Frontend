import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SignupToast } from "../../components/Toast/UserToastTypes";
import { LoginFormData } from "../../pages/LoginPage/LoginPageBody";
import { SignupFormData } from "../../pages/SignUpPage/SignUpPageBody";
import {
  getToken,
  handleError,
  removeAuthorizationToken,
  removeToken,
  setAuthorizationToken,
  setToken,
} from "../handlers";
import { LoginResponse, SignupResponse } from "./userType";

const URL = "http://localhost:3000/employee/";

// Remember to add signup fields later.
export const signup = createAsyncThunk(
  "signup",
  async (signupFormData: SignupFormData) => {
    try {
      const response = await axios({
        method: "post",
        url: URL + "signup",
        data: signupFormData,
        responseType: "json",
      });

      SignupToast.showToast(response.data.username);
      return response.data as SignupResponse;
    } catch (error: unknown) {
      handleError(error);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (loginFormData: LoginFormData) => {
    try {
      const response = await axios({
        method: "post",
        url: URL + "login",
        data: loginFormData,
        responseType: "json",
      });

      const token = response.data.token;
      setToken(token);
      setAuthorizationToken();
      console.log(getToken());

      return { loggedIn: true } as LoginResponse;
    } catch (error: unknown) {
      handleError(error);
      return { loggedIn: false } as LoginResponse;
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    logout: () => {
      removeAuthorizationToken();
      removeToken();
    },
  },
});

export const { logout } = usersSlice.actions;
export default usersSlice.reducer;
