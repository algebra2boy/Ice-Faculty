import { SignupLoginFormProps } from "../../models/auth.model";
import { Link } from "react-router-dom";

const SignupFormContent: React.FC<SignupLoginFormProps> = (props: SignupLoginFormProps) => {
  const { name, password, confirmedPassword, valueHandler } = props;

  return (
    <>
      <h2 className=" text-2xl font-bold m-auto">Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        className="input input-bordered w-full"
        value={name}
        onChange={valueHandler}
        name="name"
      />
      <input
        type="password"
        placeholder="Password"
        className="input input-bordered w-full"
        value={password}
        onChange={valueHandler}
        name="password"
      />
      <input
        type="password"
        placeholder="Confirm password"
        className="input input-bordered w-full"
        value={confirmedPassword}
        onChange={valueHandler}
        name="confirmedPassword"
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
