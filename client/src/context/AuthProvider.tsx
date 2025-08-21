import React, { createContext, useContext, useEffect, useState } from "react";

type AuthType = {
  userId: string | null;
  name: string | null;
  email: string | null;
  password?: string | null;
  isAuthenticated: boolean | null;
};

type AuthContextType = {
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthType>({
    userId: "",
    name: "",
    email: "",
    isAuthenticated: false,
  });

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/auth/verify-user",
          {
            method: "GET",
            credentials: "include",
          }
        );

        const responseData = await response.json();
        console.log(responseData);

        if (response.ok) {
          setAuth({
            userId: responseData.user.id,
            name: responseData.user.name,
            email: responseData.user.email,
            isAuthenticated: true,
          });
        } else {
          setAuth({
            userId: null,
            name: null,
            email: null,
            isAuthenticated: false,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    verifyUser();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within in AuthProvider");

  return context;
};

export default AuthProvider;
