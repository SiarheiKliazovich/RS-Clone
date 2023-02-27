import { FunctionComponent } from "react";
import { ConfiguratorIconType } from "../types/configurator";

export interface IConfigurator {
  lang: string;
  data: ICategory[];
}

export interface ICategory {
  categoryName: string;
  image: string;
  id: number;
  type: string;
  price: string;
  subCategories?: ISubcategory[];
}

export interface ISubcategory {
  name: string;
  image: string;
  type: string;
  id: number;
}

export interface IViewSetting {
  type: string;
  name: string;
  data: {
    en: string;
    ru: string;
  };
}

export interface IIconSetting {
  weave: string;
  bgColor: string;
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  colorFour: string;
  colorFive: string;
  colorSix: string;
}

export interface IIconMapping {
  type: string;
  component: FunctionComponent<ConfiguratorIconType>;
}
