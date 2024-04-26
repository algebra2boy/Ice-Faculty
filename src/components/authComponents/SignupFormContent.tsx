import { SignupLoginFormProps } from "../../models/auth.model";
import { Link } from "react-router-dom";
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
      <div className="basis-24" />
      <div className="flex flex-col space-y-4 items-center w-full">
        <Link to="/">
          <KolynButton 
            label="Sign Up" 
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
