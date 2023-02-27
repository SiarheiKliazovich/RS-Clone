import { ReactNode } from "react";
import {
  IConfigurator,
  ICategory,
  ISubcategory,
  IIconSetting,
  IIconMapping,
} from "../interfaces/configurator";

export type AccordionType = {
  title: string;
  children: ReactNode;
};

export type CategoriesType = {
  tieList: IConfigurator;
  accentColor: {
    static: string;
    hover: string;
  };
  isNavbarNightMode: boolean;
};

export type CategoryType = {
  tie: ICategory;
  accentColor: {
    static: string;
    hover: string;
  };
  isNavbarNightMode: boolean;
};

export type ConfiguratorIconType = {
  settings: IIconSetting;
};

export type SubCategoryType = {
  subCategory: ISubcategory;
  category: string;
  accentColor: {
    static: string;
    hover: string;
  };
  isNavbarNightMode: boolean;
};

export type IconFactoryType = {
  components: IIconMapping[];
  settings: IIconSetting;
  type: string;
};
