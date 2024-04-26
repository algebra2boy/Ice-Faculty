import { useState } from "react";

import LoginFormContent from "./LoginFormContent";
import SignupFormContent from "./SignupFormContent";
import { AuthProps } from "../../models/auth.model";

const AuthForm: React.FC<AuthProps> = ({ authType }) => {
  const [authForm, setAuthForm] = useState({
    name: "",
    password: "",
    confirmedPassword: ""
  });

  const valueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  
    setAuthForm({...authForm, [name]: value})
  }

  return (
    <form className="flex mx-auto w-full md:w-2/3 lg:w-1/3 p-6 bg-white">
      <div className="flex flex-col gap-4 w-full">
        {authType === "login" ? (
          <LoginFormContent name={authForm.name} password={authForm.password} valueHandler={valueHandler} />
        ) : (
          <SignupFormContent
            name={authForm.name}
            password={authForm.password}
            confirmedPassword={authForm.confirmedPassword}
            valueHandler={valueHandler}
          />
        )}
      </div>
    </form>
  );
};

export default AuthForm;
