import { useState } from "react";
import { useAuthContext } from "../context/AuthProvider";
import type { ErrorFormTypes } from "../types/error.types";
import { callChangePassword } from "../services/auth.services";
import type { ChangePaswordFormTypes } from "../types/auth.types";
import ChangePasswordForm from "../components/ChangePasswordForm";

const HomePage = () => {
  const { auth } = useAuthContext();

  const [formData, setFormData] = useState<ChangePaswordFormTypes>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const { response, responseData } = await callChangePassword(
        auth.userId!,
        formData
      );

      if (!response.ok) {
        const errorsObj: Record<string, string> = {};
        responseData.errors.forEach((error: ErrorFormTypes) => {
          errorsObj[error.path] = error.msg;
        });

        setErrors(errorsObj);
        return;
      }

      alert("Changed password successfully");
      setErrors({});
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 space-y-10">
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome</h2>
        <p className="text-gray-700 text-lg">
          <strong>Name:</strong> {auth.name}
        </p>
        <p className="text-gray-700 text-lg">
          <strong>Email:</strong> {auth.email}
        </p>
      </section>

      <ChangePasswordForm
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleChangePassword={handleChangePassword}
      />
    </div>
  );
};

export default HomePage;
