import { SignupLoginFormProps } from "../../models/auth.model";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { KolynTextfield, KolynButton, KolynLabel } from "../../styles";

const SignupFormContent: React.FC<SignupLoginFormProps> = (props: SignupLoginFormProps) => {
  const { name, password, confirmedPassword, valueHandler } = props;

  return (
    <>
      <KolynLabel label="Sign Up" />
      <div className="flex flex-col items-center space-y-4 w-full">
        <KolynTextfield
          textfieldType="text"
          placeholder="Name"
          value={name}
          onChange={valueHandler}
          name="name"
        />
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
      {isMobile && <div className="basis-24" />}
      <div className={isMobile ? "flex flex-col space-y-4 items-center w-full" : 
                                 "flex flex-row space-x-4 items-center w-full justify-center"}>
        <Link to="/">
          <KolynButton 
            label="Sign Up" 
            isResponsive={true} 
            onClick={undefined} 
            bgColor="bg-mainColor"
          />
        </Link>
        <Link to="/">
          <KolynButton
            label="Cancel" 
            isResponsive={true} 
            onClick={undefined} 
            bgColor="bg-mainColor" 
          />
        </Link>
      </div>
    </>
  );
};

export default SignupFormContent;
