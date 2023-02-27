import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import "./subcategories.scss";
import { useParams } from "react-router-dom";
import { ISubcategory } from "../../../interfaces/configurator";
import SubCategory from "./SubCategory";
import { IStore } from "../../../interfaces/store";
import subcategoriesLang from "../../../data/subcategories";
import { ILangReducer } from "../../../interfaces/langReducer";
import configurator from "../../../data/configurator";
import Breadcrumbs from "../Breadcrumbs";
import { nightTheme, lightTheme } from "../../../data/constants";

const SubCategories: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const { accentColor, isNavbarNightMode, isNightMode } = interfaceSettings;
  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const list = subcategoriesLang.find((c) => c.lang === lang)!;

  const URLParams = useParams();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const tieList = configurator.find((c) => c.lang === lang)!;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const subCategories = tieList.data.find(
    (category) => category.type === URLParams.category
  )!.subCategories!;

  return (
    <>
      <div className="tie-category-wrapper">
        <Breadcrumbs />
        <div
          className="subcategories-wrapper"
          style={{
            backgroundColor: isNightMode
              ? nightTheme.background.page
              : lightTheme.background.page,
          }}
        >
          <h4 className="title-subcategories">
            {list.data.titleTie} | {list.data.titleWoven} |{" "}
            {list.data.titleDesign}
          </h4>
          <ul className="images-list">
            {subCategories.map((subCategory: ISubcategory) => (
              <SubCategory
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                category={URLParams.category!}
                subCategory={subCategory}
                key={subCategory.type}
                accentColor={accentColor}
                isNavbarNightMode={isNavbarNightMode}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SubCategories;
