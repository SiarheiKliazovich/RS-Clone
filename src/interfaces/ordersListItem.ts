import { IOrder } from "./order";

export interface IOrdersListItem {
  item: IOrder;
  i: number;
  deleteItem: (id: string) => void;
  updateItem: (id: string, status: string) => void;
}
