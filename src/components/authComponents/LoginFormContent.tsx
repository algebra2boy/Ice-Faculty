import { LoginFormProps } from "../../models/auth.model";
import { Link } from "react-router-dom";
import { KolynTextfield, KolynButton, KolynH2Label } from "../../styles";

const LoginFormContent: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const { name, password, valueHandler } = props;

  return (
    <>
      <KolynH2Label label="Sign In" />
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
      <div className="basis-24" />
      <div className="flex flex-col space-y-4 items-center w-full">
        <Link to="home">
          <KolynButton label="Login" isResponsive={true} onClick={undefined} />
        </Link>
        <Link to="signup">
          <KolynButton label="Sign Up" isResponsive={true} onClick={undefined} />
        </Link>
      </div>
    </>
  );
};

export default LoginFormContent;
