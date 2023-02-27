import { IOrder } from "./order";

export interface IOrdersList {
  orders: IOrder[];
  ordersLoadingStatus: string;
}
