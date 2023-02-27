export interface IOrder {
  _id: string;
  userId: string;
  sellerId: string;
  image: string;
  price: number;
  status: string;
  date: string;
  deadlineDate?: string;
}

export interface IOrderForGraph {
  label: string;
  price: number;
  count: number;
}
