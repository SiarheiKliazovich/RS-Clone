import { IUser } from "../interfaces/user";
import { _apiBase } from "./apiBase";

export const getUsers = async (role = ""): Promise<IUser[]> => {
  try {
    const response: Response = await fetch(
      `${_apiBase}/api/users${role ? `?role=${role}` : ""}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const users = await response.json();
    return users;
  } catch (e) {
    throw e;
  }
};

export const getUser = async (id: string): Promise<IUser> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const user = await response.json();
    return user;
  } catch (e) {
    throw e;
  }
};

export const createUser = async (
  body: Pick<IUser, "email" | "password" | "role">
): Promise<IUser> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/users`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = await response.json();
    return user;
  } catch (e) {
    throw e;
  }
};

export const updateUser = async (
  id: string,
  body: Pick<IUser, "role">
): Promise<IUser> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const user = await response.json();
    return user;
  } catch (e) {
    throw e;
  }
};

export const deleteUser = async (id: string): Promise<boolean> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    throw e;
  }
};
