import { handleInvalidSubmission } from "../../components/Form/FormActionHandler";
import { LoginFormData } from "./LoginPageBody";

const isValidUsername = (username: string): boolean => {
  if (!username) {
    handleInvalidSubmission("Username cannot be empty!");
    return false;
  } else if (username.length < 4) {
    handleInvalidSubmission("Username should have a minimum of 4 characters!");
    return false;
  } else if (username.length > 30) {
    handleInvalidSubmission("Username should have a maximum of 30 characters!");
    return false;
  }

  return true;
};

const isValidPassword = (password: string): boolean => {
  if (!password) {
    handleInvalidSubmission("Password cannot be empty!");
    return false;
  } else if (password.length < 4) {
    handleInvalidSubmission("Password should have a minimum of 4 characters!");
    return false;
  } else if (password.length > 30) {
    handleInvalidSubmission("Password should have a maximum of 30 characters!");
    return false;
  }

  return true;
};

export const isValidLoginForm = (loginFormData: LoginFormData): boolean => {
  const isValidFormUsername = isValidUsername(loginFormData.username);
  const isValidFormPassword = isValidPassword(loginFormData.password);

  return isValidFormUsername && isValidFormPassword;
};
