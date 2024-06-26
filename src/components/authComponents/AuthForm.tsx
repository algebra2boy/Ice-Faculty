import { useState } from "react";

import LoginFormContent from "./LoginFormContent";
import SignupFormContent from "./SignupFormContent";
import { AuthProps } from "../../models/auth.model";

const AuthForm: React.FC<AuthProps> = ({ authType }) => {
  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState("")

  const valueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  
    setAuthForm({...authForm, [name]: value})
  }

  return (
    <div className="flex mx-auto w-full md:w-2/3 xl:w-1/3 p-6 bg-white">
      <div className="flex flex-col gap-4 w-full">
        {authType === "login" ? (
          <LoginFormContent
            email={authForm.email}
            password={authForm.password}
            valueHandler={valueHandler}
            errorMsg={errorMsg}
            errorHandler={setErrorMsg}
          />
        ) : (
          <SignupFormContent
            email={authForm.email}
            password={authForm.password}
            confirmedPassword={authForm.confirmedPassword}
            valueHandler={valueHandler}
            errorMsg={errorMsg}
            errorHandler={setErrorMsg}
          />
        )}
      </div>
    </div>
  );
};

export default AuthForm;
