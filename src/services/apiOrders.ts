import { IOrder } from "../interfaces/order";
import { _apiBase } from "./apiBase";

export const getOrders = async (): Promise<IOrder[]> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/orders`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const orders = await response.json();
    return orders;
  } catch (e) {
    throw e;
  }
};

export const getOrder = async (id: string): Promise<IOrder> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const order = await response.json();
    return order;
  } catch (e) {
    throw e;
  }
};

export const getOrdersByUserId = async (id: string): Promise<IOrder[]> => {
  try {
    const response: Response = await fetch(
      `${_apiBase}/api/orders/user/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const orders = await response.json();
    return orders;
  } catch (e) {
    throw e;
  }
};

export const getOrdersBySellerId = async (id: string): Promise<IOrder[]> => {
  try {
    const response: Response = await fetch(
      `${_apiBase}/api/orders/seller/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const orders = await response.json();
    return orders;
  } catch (e) {
    throw e;
  }
};

export const createOrder = async (
  body: Pick<IOrder, "userId" | "image" | "price" | "sellerId">
): Promise<IOrder> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/orders`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const order = await response.json();
    return order;
  } catch (e) {
    throw e;
  }
};

export const updateOrder = async (
  id: string,
  body: Pick<IOrder, "status">
): Promise<IOrder> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/orders/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const order = await response.json();
    return order;
  } catch (e) {
    throw e;
  }
};

export const deleteOrder = async (id: string): Promise<boolean> => {
  try {
    const response: Response = await fetch(`${_apiBase}/api/orders/${id}`, {
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
