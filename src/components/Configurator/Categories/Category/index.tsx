import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { CategoryType } from "../../../../types/configurator";
import { nightTheme } from "../../../../data/constants";
import "./category.scss";

const Category: FunctionComponent<CategoryType> = ({
  tie,
  accentColor,
  isNavbarNightMode,
}: CategoryType) => {
  const backgroundColor = nightTheme.background.element;

  return (
    <li className="category__list_item">
      <div className="category-blok">
        <img className="category-img" src={tie.image} alt="img-ties" />
        <Link
          to={`/configurator/${tie.type}`}
          style={{
            backgroundColor: isNavbarNightMode
              ? backgroundColor
              : accentColor.static,
          }}
          className="category-name"
        >
          {tie.categoryName}
        </Link>
      </div>
    </li>
  );
};

export default Category;
