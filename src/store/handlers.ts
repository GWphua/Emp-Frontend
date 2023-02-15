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