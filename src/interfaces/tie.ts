export interface ITie {
  _id: string;
  userId: string;
  name: string;
  image: string;
  price: number;
}

export interface ITiesList {
  ties: ITie[];
  tieLoadingStatus: string;
}

export interface ITiesReducer {
  tiesReducer: ITiesList;
}
