import { ChangeEvent } from "react";

export interface AuthProps {
  authType: string;
}

export interface LoginFormProps {
  name: string;
  password: string;
  valueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface SignupLoginFormProps {
  name: string;
  password: string;
  confirmedPassword: string;
  valueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

