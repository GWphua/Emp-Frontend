import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import {
  handleInvalidSubmission,
  handleReset,
} from "../../components/Form/handleInvalidSubmission";
import CircularBackground from "../../components/FormBackgrounds/CircularBackground";
import { InfoToast } from "../../components/Toast/ToastTypes";
import { SignupToast } from "../../components/Toast/UserToastTypes";
import { useAppDispatch } from "../../store/hooks";
import { signup } from "../../store/Users/users";
import { UserDepartmentType } from "../../store/Users/userType";
import "./SignUpPageBody.css";
import { isValidSignupForm } from "./ValidateSignup";

export interface SignupFormData {
  username: string;
  password: string;
  department: UserDepartmentType;
}

const SignUpPageBody: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("HR");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleDepartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (
      event.target.value !== "HR" &&
      event.target.value !== "PS" &&
      event.target.value !== "ADMIN"
    ) {
      handleInvalidSubmission(
        "Department values can only be 'HR', 'PS' or 'ADMIN'"
      );
      return;
    }

    setDepartment(event.target.value);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signUpHandler: FormEventHandler<HTMLElement> = async (event) => {
    event.preventDefault();

    const signupFormData = {
      username: username.trim(),
      password: password.trim(),
      department: department,
    } as SignupFormData;

    if (!isValidSignupForm(signupFormData)) {
      return;
    }

    await dispatch(signup(signupFormData));

    SignupToast.showToast(signupFormData.username);
    navigate("/");
  };

  const resetHandler = () => {
    setUsername("");
    setPassword("");
    setDepartment("HR");
    handleReset();
  };

  return (
    <CircularBackground>
      <form onSubmit={signUpHandler} onReset={resetHandler}>
        <div className="form__title">Sign Up</div>
        <div className="form__subtitle">Enter details below to log in!</div>
        <div className="form__input-container">
          <label>Username</label>
          <input
            type="text"
            className="form__input"
            onChange={handleUsernameChange}
            value={username}
          ></input>
        </div>
        <div className="form__input-container">
          <label>Password</label>
          <input
            type="text"
            className="form__input"
            onChange={handlePasswordChange}
            value={password}
          ></input>
        </div>
        <div className="form__input-container">
          <label>Department</label>
          <select
            onChange={handleDepartmentChange}
            value={department}
            className="form__input"
          >
            <option>HR</option>
            <option>PS</option>
            <option>ADMIN</option>
          </select>
        </div>
        <div className="form__button-container">
          <Button
            buttonType="reset"
            backgroundColor="rgb(221, 0, 214)"
            onClick={() => {}}
          >
            Reset
          </Button>
          <Button
            buttonType="submit"
            backgroundColor="rgb(0, 151, 221)"
            onClick={() => {}}
          >
            Submit
          </Button>
        </div>
      </form>
    </CircularBackground>
  );
};

export default SignUpPageBody;
