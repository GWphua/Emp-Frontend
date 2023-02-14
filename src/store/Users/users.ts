import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ErrorToast } from "../../components/Toast/ToastTypes";
import { LoginToast, SignupToast } from "../../components/Toast/UserToastTypes";
import { LoginFormData } from "../../pages/LoginPage/LoginPageBody";
import { SignupFormData } from "../../pages/SignUpPage/SignUpPageBody";
import { LoginResponse, SignupResponse, UsersState } from "./userType";

const URL = "http://localhost:3000/employee/";

const initialState = { authorized: false } as UsersState;

interface AxiosError {
  message: string;
  response: {
    status: number;
    statusText: string;
    data?: { errorMessage: string };
  };
}

const handleError = (error: unknown) => {
  if (error === null || error === undefined) {
    ErrorToast.showToast("Failed to get data from backend.");
    return;
  }

  const axiosError = error as AxiosError;
  if (axiosError.response.status === 404) {
    ErrorToast.showToast(
      axiosError.response.statusText + ": " + axiosError.message
    );
  } else {
    ErrorToast.showToast(
      axiosError.response.statusText +
        ": " +
        axiosError.response.data!.errorMessage
    );
  }
};

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

      LoginToast.showToast(response.data.username);
      return response.data as LoginResponse;
    } catch (error: unknown) {
      handleError(error);
      return null;
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: (state: UsersState) => {
      state.authorized = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state: UsersState, action: PayloadAction<LoginResponse | null>) => {
        if (!action.payload) {
          return;
        }

        state.department = action.payload.department;
        state.username = action.payload.username;
        state.authorized = true;
      }
    );
  },
});

export const { logout } = usersSlice.actions;
export default usersSlice.reducer;
