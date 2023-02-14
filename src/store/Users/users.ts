import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ErrorToast } from "../../components/Toast/ToastTypes";
import { SignupToast } from "../../components/Toast/UserToastTypes";
import { SignupFormData } from "../../pages/SignUpPage/SignUpPageBody";
import { SignupResponse } from "./userType";

const URL = "http://localhost:3000/employee/";

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
      console.log(response.data);
      SignupToast.showToast(response.data.username);
      return response.data as SignupResponse;
    } catch (error: unknown) {
      handleError(error);
    }
  }
);

// export const login = createAsyncThunk("login", async (loginFormData: LoginFormData) => {
//   try {

//   } catch (error: unknown) {
//     handleError(error);
//   }
// })

const usersSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    //     builder.addCase(
    // // Add code
    //       );
  },
});

export default usersSlice.reducer;
