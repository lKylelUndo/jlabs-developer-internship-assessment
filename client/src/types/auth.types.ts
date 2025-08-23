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

export type AuthType = {
  userId: string | null;
  name: string | null;
  email: string | null;
  password?: string | null;
  isAuthenticated: boolean | null;
};

export type AuthContextType = {
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
  loading: boolean;
};
