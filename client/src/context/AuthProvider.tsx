import React, { createContext, useContext, useEffect, useState } from "react";
import type { AuthContextType, AuthType } from "../types/auth.types";

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthType>({
    userId: "",
    name: "",
    email: "",
    isAuthenticated: false,
  });

  const [loading, setLoading] = useState<boolean>(true);

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
      } finally {
        setLoading(false)
      }
    };

    verifyUser();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, loading }}>
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
