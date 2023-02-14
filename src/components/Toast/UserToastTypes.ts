import { ToastPosition, toast } from "react-toastify";
import { UserDepartmentType } from "../../store/Users/userType";
import { DEFAULT_POSITION, ToastTypes } from "./ToastTypes";

export const SignupToast: ToastTypes = class {
  public static showToast = (
    message: string = "",
    position: ToastPosition = DEFAULT_POSITION
  ) => {
    const toastMessage = `User ${message} Created!`;

    toast.success(toastMessage, {
      position,
      autoClose: 5000,
    });
  };
};

export const LoginToast: ToastTypes = class {
  public static showToast = (
    message: UserDepartmentType,
    position: ToastPosition = DEFAULT_POSITION
  ) => {
    const toastMessage = `Logging in with Department: ${message}`;

    toast.success(toastMessage, {
      position,
      autoClose: 5000,
    });
  };
};
