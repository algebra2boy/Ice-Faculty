import { LoginFormProps } from "../../models/auth.model";
import { Link } from "react-router-dom";

const LoginFormContent: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const { name, password, valueHandler } = props;

  return (
    <>
      <h2 className=" text-2xl font-bold m-auto">Sign In</h2>
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
      <div className="w-full flex space-x-4">
        <Link to="home">
          <button className="btn">Login</button>
        </Link>
        <Link to="signup">
          <button className="btn">Sign Up</button>
        </Link>
      </div>
    </>
  );
};

export default LoginFormContent;
