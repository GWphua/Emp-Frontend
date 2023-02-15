import axios from "axios";
import { ErrorToast } from "../components/Toast/ToastTypes";

interface AxiosError {
  message: string;
  response: {
    status: number;
    statusText: string;
    data?: { errorMessage: string };
  };
}

export const handleError = (error: unknown) => {
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

export const setToken = (token: string) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const getToken = (): string | null => {
  const tokenString = localStorage.getItem("token");
  return tokenString ? JSON.parse(tokenString) : null;
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const setAuthorizationToken = () => {
  const token = getToken();

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
  }
};

export const removeAuthorizationToken = () => {
  delete axios.defaults.headers.common["Authorization"];
};
