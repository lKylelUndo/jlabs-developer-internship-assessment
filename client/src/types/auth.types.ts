export type RegisterFormTypes = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormTypes = {
  email: string;
  password: string;
};

export type ChangePaswordFormTypes = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
