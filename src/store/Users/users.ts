import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CreatedToast, ErrorToast } from "../../components/Toast/ToastTypes";
import { SignupFormData } from "../../pages/SignUpPage/SignUpPageBody";
import { SignupResponse } from "./userType";

const URL = "http://localhost:3000/employee/";

const handleError = (error: unknown) => {
  if (error === null || error === undefined) {
    ErrorToast.showToast("Failed to get data from backend.");
  } else {
    ErrorToast.showToast(error.toString());
  }
};

// Remember to add signup fields later.
export const signup = createAsyncThunk("signup", async (signupFormData: SignupFormData) => {
  try {
    const response = await axios({
      method: "post",
      url: URL + "signup",
      data: signupFormData,
      responseType: "json",
    });

    CreatedToast.showToast(response.data.name);
    return response.data as SignupResponse;
  } catch (error: unknown) {
    handleError(error);
  }
});

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
