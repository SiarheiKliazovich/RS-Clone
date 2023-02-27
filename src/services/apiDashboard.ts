import { _apiBase } from "./apiBase";

export const getOrders = async () => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/orders`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.status === 200) {
      return await response.json();
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e.message;
    }
  }
};

export const getUsers = async (params: { role: string }) => {
  try {
    const response: Response = await fetch(
      `${_apiBase}/api/users?${new URLSearchParams(params)}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      return await response.json();
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e.message;
    }
  }
};
