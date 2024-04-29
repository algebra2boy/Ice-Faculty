import { LoginFormProps } from "../../models/auth.model";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { KolynTextfield, KolynButton, KolynLabel } from "../../styles";

const LoginFormContent: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const { name, password, valueHandler } = props;

  return (
    <>
      <KolynLabel label="Sign In" />
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
      </div>
      {isMobile && <div className="basis-24" />}
      <div className={isMobile ? "flex flex-col space-y-4 items-center w-full" : 
                                 "flex flex-row space-x-4 items-center w-full justify-center"}>
        <Link to="home">
          <KolynButton 
            label="Login" 
            isResponsive={true} 
            onClick={undefined} 
            bgColor="bg-mainColor" 
          />
        </Link>
        <Link to="signup">
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

export default LoginFormContent;
