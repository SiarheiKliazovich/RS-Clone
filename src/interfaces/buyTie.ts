export interface IBuyTie {
  userId: string;
  sellerId: string;
  image: string;
  price: number;
}

export interface IBuyTieList {
  buyTie: IBuyTie;
  buyTieLoadingStatus: string;
}

export interface IBuyTieReducer {
  buyTieReducer: IBuyTieList;
}
