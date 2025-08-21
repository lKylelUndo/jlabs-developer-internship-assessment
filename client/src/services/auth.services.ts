import type {
  ChangePaswordFormTypes,
  LoginFormTypes,
  RegisterFormTypes,
} from "../types/auth.types";

export const callRegister = async (
  formData: RegisterFormTypes
): Promise<{ response: Response; responseData: any }> => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();

    return { response, responseData };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const callLogin = async (
  formData: LoginFormTypes
): Promise<{ response: Response; responseData: any }> => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();

    return { response, responseData };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const callChangePassword = async (
  userId: string,
  formData: ChangePaswordFormTypes
): Promise<{ response: Response; responseData: any }> => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/auth/change-password/${userId}`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const responseData = await response.json();

    return { response, responseData };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
