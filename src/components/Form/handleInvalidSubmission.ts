
import { InfoToast, InvalidFormToast } from "../Toast/ToastTypes";

export const handleInvalidSubmission = (message: string) => {
  InvalidFormToast.showToast(message);
};

export const handleReset = () => {
  InfoToast.showToast("Form Reset");
};
