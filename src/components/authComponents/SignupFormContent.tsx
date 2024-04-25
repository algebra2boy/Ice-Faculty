import { SignupLoginFormProps } from "../../models/auth.model";
import { Link } from "react-router-dom";
import { KolynTextfield, KolynButton, KolynH2Label } from "../../styles";

const SignupFormContent: React.FC<SignupLoginFormProps> = (props: SignupLoginFormProps) => {
  const { name, password, confirmedPassword, valueChangeHandler } = props;

  return (
    <>
      <KolynH2Label label="Sign Up" />
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
      <KolynTextfield
        textfieldType="password"
        placeholder="Confirm password"
        value={confirmedPassword}
        onChange={(e) => valueChangeHandler(e, "confirmedPassword")}
      />
      <div className="basis-24" />
      <div className="flex flex-col space-y-4 items-center w-full">
        <Link to="/">
          <KolynButton label="Sign Up" isResponsive={true} />
        </Link>
      </div>
    </>
  );
};

export default SignupFormContent;
