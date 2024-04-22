import { SignupLoginFormProps } from "../../models/auth.model";
import { Link } from "react-router-dom";

const SignupFormContent: React.FC<SignupLoginFormProps> = (props: SignupLoginFormProps) => {
  const { name, password, confirmedPassword, valueChangeHandler } = props;

  return (
    <>
      <h2 className=" text-2xl font-bold m-auto">Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        className="input input-bordered w-full"
        value={name}
        onChange={(e) => valueChangeHandler(e, "name")}
      />
      <input
        type="password"
        placeholder="Password"
        className="input input-bordered w-full"
        value={password}
        onChange={(e) => valueChangeHandler(e, "password")}
      />
      <input
        type="password"
        placeholder="Confirm password"
        className="input input-bordered w-full"
        value={confirmedPassword}
        onChange={(e) => valueChangeHandler(e, "confirmedPassword")}
      />
      <div className="w-full flex space-x-4">
        <Link to="/">
          <button className="btn">Sign Up</button>
        </Link>
      </div>
    </>
  );
};

export default SignupFormContent;
