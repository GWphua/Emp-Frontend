import { FC, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import CircularBackground from "../../components/FormBackgrounds/CircularBackground";
import { InfoToast } from "../../components/Toast/ToastTypes";
import "./LoginPageBody.css";

const LoginBody: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const loginHandler = () => {
    InfoToast.showToast("Logging in...");
    navigate("/homepage");
  };

  const resetHandler = () => {
    setUsername("");
    setPassword("");
    InfoToast.showToast("Form Reset");
  };

  return (
    <CircularBackground>
      <form onSubmit={loginHandler} onReset={resetHandler}>
        <div className="form__title">Log In</div>
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

export default LoginBody;
