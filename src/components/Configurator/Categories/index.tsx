import Category from "../Categories/Category";
import { FunctionComponent } from "react";
import { CategoriesType } from "../../../types/configurator";
import { ICategory } from "../../../interfaces/configurator";
import "./categories.scss";

const Categories: FunctionComponent<CategoriesType> = ({
  tieList,
  accentColor,
  isNavbarNightMode,
}: CategoriesType) => (
  <ul className="category__list">
    {tieList?.data?.map((tie: ICategory) => (
      <Category
        tie={tie}
        key={tie.type}
        accentColor={accentColor}
        isNavbarNightMode={isNavbarNightMode}
      />
    ))}
  </ul>
);

export default Categories;
