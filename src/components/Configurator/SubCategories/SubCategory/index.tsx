import { FunctionComponent } from "react";
import { SubCategoryType } from "../../../../types/configurator";
import { nightTheme } from "../../../../data/constants";
import { Link } from "react-router-dom";

const SubCategory: FunctionComponent<SubCategoryType> = ({
  category,
  subCategory,
  accentColor,
  isNavbarNightMode,
}: SubCategoryType) => {
  const backgroundColor = nightTheme.background.element;

  return (
    <li className="image-item">
      <div className="img-wrapper">
        <img className="img-subcategories" src={subCategory.image} alt="img" />
      </div>
      <div className="btn-wrapper">
        <Link
          to={`/configurator/${category}/${subCategory.type}`}
          style={{
            backgroundColor: isNavbarNightMode
              ? backgroundColor
              : accentColor.static,
          }}
          className="category-name"
        >
          {subCategory.name}
        </Link>
      </div>
    </li>
  );
};
export default SubCategory;
