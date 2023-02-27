import { IUser } from "../interfaces/user";
import { _apiBase } from "./apiBase";

export const registration = async (
  body: Pick<IUser, "email" | "password" | "role">
) => {
  try {
    const response: Response = await fetch(
      `${_apiBase}/api/auth/registration`,
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { message } = await response.json();
    if (!response.ok) {
      throw new Error(message);
    } else {
      return message;
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e.message;
    }
  }
};

export const login = async (body: Pick<IUser, "email" | "password">) => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(message);
    } else {
      const { user, token } = await response.json();
      localStorage.setItem("token", token);
      return user;
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e.message;
    }
  }
};
