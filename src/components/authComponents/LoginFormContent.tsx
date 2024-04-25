import { LoginFormProps } from "../../models/auth.model";
import { Link } from "react-router-dom";
import { KolynTextfield, KolynButton, KolynH2Label } from "../../styles";

const LoginFormContent: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const { name, password, valueChangeHandler } = props;

  return (
    <>
      <KolynH2Label label="Sign In" />
      <KolynTextfield
        textfieldType="text"
        placeholder="Name"
        value={name}
        onChange={(e) => valueChangeHandler(e, "name")}
      />
      <KolynTextfield
        textfieldType="password"
        placeholder="Password"
        value={password}
        onChange={(e) => valueChangeHandler(e, "password")}
      />
      <div className="basis-24" />
      <div className="flex flex-col space-y-4 items-center w-full">
        <Link to="home">
          <KolynButton label="Login" />
        </Link>
        <Link to="signup">
          <KolynButton label="Sign Up" />
        </Link>
      </div>
    </>
  );
};

export default LoginFormContent;
