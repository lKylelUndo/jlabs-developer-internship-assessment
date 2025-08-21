import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import type { RegisterFormTypes } from "../types/auth.types";
import type { ErrorFormTypes } from "../types/error.types";
import { callRegister } from "../services/auth.services";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const { setAuth } = useAuthContext();
  const [formData, setFormData] = useState<RegisterFormTypes>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const navigate = useNavigate();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const { response, responseData } = await callRegister(formData);

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
        userId: responseData.newCreatedUser.id,
        name: responseData.newCreatedUser.name,
        email: responseData.newCreatedUser.email,
        isAuthenticated: true,
      });

      navigate("/homepage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <RegisterForm
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleRegister={handleRegister}
      />
    </>
  );
};

export default Register;
