import { LoginFormProps } from "../../models/auth.model";
import { useContext } from "react";
import { Link, useNavigate, redirect } from "react-router-dom";
import { UserContext } from "../UserProvider";
import { KolynTextfield, KolynButton, KolynLabel } from "../../styles";
import encryptPassword from "../../encrypt";

import { serverAddress } from "../../serverAddress.config";

const LoginFormContent: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const { email, password, valueHandler, errorMsg, errorHandler } = props;
  const navigate = useNavigate();

  const { userEmail, setUserEmail } = useContext(UserContext);

  // TODO: Add cookies to make redirecting work
  if (userEmail) {
    redirect("/home");
  }

  const loginOnClickHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    
    try {
      const hashedPassword = await encryptPassword(password);
      // HTTP POST
      const response = await fetch(`${serverAddress}api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.toLowerCase(),
          password: hashedPassword,
          isTeacher: true,
        }),
      });

      // get response
      const serverResponse = await response.json();
      if (serverResponse.status === "success" && response.ok) {
        // success
        setUserEmail(email)
        navigate("/home");
      } else if (serverResponse.status) {
        errorHandler(serverResponse.message);
      } else {
        // edge case
        errorHandler("An error has occurred, please try again later.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <KolynLabel label="Sign In" />
      {errorMsg ? <div className=" text-error">{errorMsg}</div> : <></>}
      <div className="flex flex-col items-center space-y-4 w-full">
        <KolynTextfield textfieldType="text" placeholder="Email" value={email} onChange={valueHandler} name="email" />
        <KolynTextfield
          textfieldType="password"
          placeholder="Password"
          value={password}
          onChange={valueHandler}
          name="password"
        />
      </div>
      <div className="basis-24" />
      <div className="flex flex-col space-y-4 items-center w-full">
        <KolynButton label="Login" isResponsive={true} onClick={loginOnClickHandler} bgColor="bg-mainColor" />
        <Link to="signup">
          <KolynButton label="Sign Up" isResponsive={true} onClick={undefined} bgColor="bg-mainColor" />
        </Link>
      </div>
    </>
  );
};

export default LoginFormContent;
