import { ChangeEvent } from "react";

export interface AuthProps {
  authType: string;
}

export interface LoginFormProps {
  name: string;
  password: string;
  valueChangeHandler: (e: ChangeEvent<HTMLInputElement>, valueType: string) => void;
}

export interface SignupLoginFormProps {
  name: string;
  password: string;
  confirmedPassword: string;
  valueChangeHandler: (e: ChangeEvent<HTMLInputElement>, valueType: string) => void;
}

