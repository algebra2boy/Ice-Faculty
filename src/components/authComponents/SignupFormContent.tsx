import { SignupLoginFormProps } from "../../models/auth.model";
import { useNavigate } from "react-router-dom";
import { KolynTextfield, KolynButton, KolynLabel } from "../../styles";
import encryptPassword from "../../encrypt";

const SignupFormContent: React.FC<SignupLoginFormProps> = (props: SignupLoginFormProps) => {
  const { email, password, confirmedPassword, valueHandler, errorMsg, errorHandler } = props;
  const navigate = useNavigate();

  const passwordFormatVerification = () => {
    const passwordArray = password.split("");
    let containUppercase = false;
    let containLowercase = false;
    let containNumber = false;
    let error = ""

    if (passwordArray.length < 8) {
      errorHandler("At least 8 characters are required in the password");
      return false;
    }

    for (const ch of passwordArray) {
      if (!containUppercase && ch >= "A" && ch <= "Z") {
        containUppercase = true;
      }
      if (!containLowercase && ch >= "a" && ch <= "a") {
        containLowercase = true;
      }
      if (!containNumber && ch >= "0" && ch <= "9") {
        containNumber = true;
      }
    }

    if (!containUppercase) {
      error += "At least one upper case character is required in the password\n";
    }
    if (!containLowercase) {
      error += "At least one lower case character is required in the password\n";
    }
    if (!containNumber) {
      error += "At least one number is required in the password\n";
    }

    if (error) {
      errorHandler(error)
      return false
    }
    
    if (password !== confirmedPassword) {
      errorHandler("Passwords do not match");
      return false;
    }

    return true;
  };

  const signupOnClickHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    try {
      // Check if the format of the user's password is correct 
      if (!passwordFormatVerification()) {
        return
      }

      const hashedPassword = await encryptPassword(password);
      // HTTP POST
      const response = await fetch("https://8513-128-119-202-122.ngrok-free.app/api/auth/signup", {
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
        navigate("/");
        // return serverResponse.token;
      } else if (serverResponse.status) {
        const message = serverResponse.message;
        if (Array.isArray(message)) {
          errorHandler(message[0]);
        } else {
          errorHandler(message);
        }
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
      <KolynLabel label="Sign Up" />
      {errorMsg ? (
        <div className="text-error">
          {errorMsg.split("\n").map((error, i) => (
            <div key={i}>{error}</div>
          ))}
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col items-center space-y-4 w-full">
        <KolynTextfield textfieldType="text" placeholder="Email" value={email} onChange={valueHandler} name="email" />
        <KolynTextfield
          textfieldType="password"
          placeholder="Password"
          value={password}
          onChange={valueHandler}
          name="password"
        />
        <KolynTextfield
          textfieldType="password"
          placeholder="Confirm password"
          value={confirmedPassword}
          onChange={valueHandler}
          name="confirmedPassword"
        />
      </div>
      <div className="basis-24" />
      <div className="flex flex-col space-y-4 items-center w-full">
        <KolynButton label="Sign Up" isResponsive={true} onClick={signupOnClickHandler} bgColor="bg-mainColor" />
      </div>
    </>
  );
};

export default SignupFormContent;
