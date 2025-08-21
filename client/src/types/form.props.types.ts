import type React from "react";
import type {
  ChangePaswordFormTypes,
  LoginFormTypes,
  RegisterFormTypes,
} from "./auth.types";

export type LoginFormPropsTypes = {
  formData: LoginFormTypes;
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type RegisterFormPropsTypes = {
  formData: RegisterFormTypes;
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegister: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type ChangePasswordFormPropsTypes = {
  formData: ChangePaswordFormTypes;
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (e: React.FormEvent<HTMLFormElement>) => void;
};
