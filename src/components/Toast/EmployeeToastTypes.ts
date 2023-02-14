import { ToastPosition, toast } from "react-toastify";
import { DEFAULT_POSITION, ToastTypes } from "./ToastTypes";

export const EmployeeCreatedToast: ToastTypes = class {
  public static showToast = (
    message: string = "",
    position: ToastPosition = DEFAULT_POSITION
  ) => {
    const toastMessage = `Employee ${message} Created!`;

    toast.success(toastMessage, {
      position,
      autoClose: 5000,
    });
  };
};

export const EmployeeUpdatedToast: ToastTypes = class {
  public static showToast = (
    message: string = "",
    position: ToastPosition = DEFAULT_POSITION
  ) => {
    const toastMessage = `Employee ${message} Updated!`;

    toast.success(toastMessage, {
      position,
      autoClose: 5000,
    });
  };
};

export const EmployeeDeletedToast: ToastTypes = class {
  public static showToast = (
    message: string = "",
    position: ToastPosition = DEFAULT_POSITION
  ) => {
    const toastMessage = `Employee ${message} Deleted!`;

    toast.warn(toastMessage, {
      position,
      autoClose: 5000,
    });
  };
};

