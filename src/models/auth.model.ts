import { ChangeEvent } from "react";

export interface AuthProps {
  authType: string;
}

export interface LoginFormProps {
  email: string;
  password: string;
  valueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMsg: string;
  errorHandler: (errorMsg: string) => void;
}

export interface SignupLoginFormProps {
  email: string;
  password: string;
  confirmedPassword: string;
  valueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMsg: string;
  errorHandler: (errorMsg: string) => void;
}

