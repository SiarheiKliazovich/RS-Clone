import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import "./configurator.scss";
import configurator from "../../data/configurator";
import Categories from "./Categories";
import { IStore } from "../../interfaces/store";
import { ILangReducer } from "../../interfaces/langReducer";
import Breadcrumbs from "./Breadcrumbs";

const Configurator: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);
  const { accentColor, isNavbarNightMode } = interfaceSettings;

  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const tieList = configurator.find((c) => c.lang === lang)!;

  return (
    <>
      <div className="configurator-wrapper">
        <div className="tie-category-banner">
          <div className="container">
            <Breadcrumbs />
            <div className="tie-category">
              <Categories
                tieList={tieList}
                accentColor={accentColor}
                isNavbarNightMode={isNavbarNightMode}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Configurator;
