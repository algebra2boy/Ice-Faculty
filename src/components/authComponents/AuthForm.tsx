import { useState } from "react";
import { ChangeEvent } from "react";

import LoginFormContent from "./LoginFormContent";
import SignupFormContent from "./SignupFormContent";
import { AuthProps } from "../../models/auth.model";

const AuthForm: React.FC<AuthProps> = ({ authType }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const valueChangeHandler = (e: ChangeEvent<HTMLInputElement>, valueType: string) => {
    switch (valueType) {
      case "name":
        setName(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmedPassword":
        setConfirmedPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <form className="flex mx-auto w-1/3 p-6 bg-white">
      <div className="flex flex-col gap-4 w-full">
        {authType === "login" ? (
          <LoginFormContent name={name} password={password} valueChangeHandler={valueChangeHandler} />
        ) : (
          <SignupFormContent
            name={name}
            password={password}
            confirmedPassword={confirmedPassword}
            valueChangeHandler={valueChangeHandler}
          />
        )}
      </div>
    </form>
  );
};

export default AuthForm;
