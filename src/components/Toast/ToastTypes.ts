import { ToastPosition, toast } from "react-toastify";

export interface ToastTypes {
  showToast(message?: string, position?: ToastPosition): void;
}

const DEFAULT_POSITION = toast.POSITION.BOTTOM_RIGHT;

export const ErrorToast: ToastTypes = class {
  public static showToast = (
    message: string = "",
    position: ToastPosition = DEFAULT_POSITION
  ) => {
    const toastMessage = `ERROR: ${message}`;

    toast.error(toastMessage, {
      position,
      autoClose: 5000,
    });
  };
};

export const CreatedToast: ToastTypes = class {
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

export const UpdatedToast: ToastTypes = class {
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

export const DeletedToast: ToastTypes = class {
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

export const InvalidToast: ToastTypes = class {
  public static showToast = (
    message: string = "",
    position: ToastPosition = DEFAULT_POSITION
  ) => {
    const toastMessage = `INVALID: ${message}`;

    toast.error(toastMessage, {
      position,
      autoClose: 5000,
    });
  };
};

export const InfoToast: ToastTypes = class {
  public static showToast = (
    message: string = "",
    position: ToastPosition = DEFAULT_POSITION
  ) => {
    const toastMessage = `INFO: ${message}`;

    toast.info(toastMessage, {
      position,
      autoClose: 5000,
    });
  };
};
