import { ITie } from "../interfaces/tie";
import { _apiBase } from "./apiBase";

export const getTies = async (): Promise<ITie[]> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/ties`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const ties = await response.json();
    return ties;
  } catch (e) {
    throw e;
  }
};

export const getTie = async (id: string): Promise<ITie> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/ties/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const tie = await response.json();
    return tie;
  } catch (e) {
    throw e;
  }
};

export const getTiesByUserId = async (id: string): Promise<ITie[]> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/ties/user/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const ties = await response.json();
    return ties;
  } catch (e) {
    throw e;
  }
};

export const getAnotherTiesForUser = async (id: string): Promise<ITie[]> => {
  try {
    const response: Response = await fetch(
      `${_apiBase}/api/ties/user/another/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const ties = await response.json();
    return ties;
  } catch (e) {
    throw e;
  }
};

export const createTie = async (
  body: Pick<ITie, "userId" | "name" | "image">
): Promise<ITie> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/ties`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const tie = await response.json();
    return tie;
  } catch (e) {
    throw e;
  }
};

export const deleteTie = async (id: string): Promise<boolean> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/ties/${id}`, {
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
