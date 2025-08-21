import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import type { LoginFormTypes } from "../types/auth.types";
import type { ErrorFormTypes } from "../types/error.types";
import { callLogin } from "../services/auth.services";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const { setAuth } = useAuthContext();
  const [formData, setFormData] = useState<LoginFormTypes>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const { response, responseData } = await callLogin(formData);

      if (!response.ok) {
        const errorsObj: Record<string, string> = {};
        responseData.errors.forEach((error: ErrorFormTypes) => {
          errorsObj[error.path] = error.msg;
        });

        setErrors(errorsObj);

        return;
      }

      setErrors({});
      setAuth({
        userId: responseData.currentUser.id,
        name: responseData.currentUser.name,
        email: responseData.currentUser.email,
        isAuthenticated: true,
      });
      navigate("/homepage");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <LoginForm
        errors={errors}
        handleChange={handleChange}
        handleLogin={handleLogin}
        formData={formData}
      />
    </>
  );
};

export default Login;
