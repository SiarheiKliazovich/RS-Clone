export interface IAddTie {
  userId: string;
  name: string;
  image: string;
  price: number;
}

export interface IAddTieList {
  addTie: IAddTie;
  addTieLoadingStatus: string;
}

export interface IAddTieReducer {
  addTieReducer: IAddTieList;
}
