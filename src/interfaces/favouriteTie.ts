export interface IFavouriteTie {
  userId: string;
  sellerId: string;
  image: string;
  price: number;
}

export interface IFavouriteTieList {
  favouriteTie: IFavouriteTie;
  favouriteTieLoadingStatus: string;
}

export interface IFavouriteReducer {
  favouriteTieReducer: IFavouriteTieList;
}
