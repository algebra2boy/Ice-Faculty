import { LoginFormProps } from "../../models/auth.model";
import { Link } from "react-router-dom";
import { KolynTextfield, KolynButton, KolynLabel } from "../../styles";

const LoginFormContent: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const { email, password, valueHandler } = props;

  return (
    <>
      <KolynLabel label="Sign In" />
      <div className="flex flex-col items-center space-y-4 w-full">
        <KolynTextfield
          textfieldType="text"
          placeholder="Email"
          value={email}
          onChange={valueHandler}
          name="email"
        />
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
