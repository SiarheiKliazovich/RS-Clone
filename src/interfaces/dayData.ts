import { Moment } from "moment";
import { IOrder } from "./order";

export interface IDayData {
  day: Moment | null;
  status: {
    nonPaid: IOrder[];
    paid: IOrder[];
    inProgress: IOrder[];
    declined: IOrder[];
    finished: IOrder[];
    deadline: IOrder[];
  };
}
