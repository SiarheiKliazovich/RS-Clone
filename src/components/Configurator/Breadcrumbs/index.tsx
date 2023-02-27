import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import configurator from "../../../data/configurator";
import { ILangReducer } from "../../../interfaces/langReducer";
import "./breadcrumbs.scss";
import breadcrumbsLang from "../../../data/breadcrumbs";

const Breadcrumbs = () => {
  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const language: "ru" | "en" = lang as "ru" | "en";
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const tieList = configurator.find((c) => c.lang === lang)!;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const breadcrumbsList = breadcrumbsLang.find((c) => c.lang === lang)!;
  const URLParams = useParams();
  const location = useLocation();

  const locationURL = location.pathname.split("/");
  const isPlains = Object.keys(URLParams).length === 0;
  const type = isPlains // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ? locationURL[locationURL.length - 1]!
    : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      URLParams.type!;

  const configuratorRoutes = {
    to: "/configurator",
    label: breadcrumbsList.data.config,
  };

  const baseRoutes =
    location.pathname === "/configurator"
      ? [configuratorRoutes]
      : [
          configuratorRoutes,
          { to: "/configurator/plains", label: breadcrumbsList.data.plains },
        ];

  const categoryRoutes =
    location.pathname === `/configurator/${URLParams.category}`
      ? [
          {
            to: `/configurator/${URLParams.category}`,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            label: tieList.data.find((el) => el.type === URLParams.category)!
              .categoryName,
          },
        ]
      : [];

  const typesRoutes =
    location.pathname === `/configurator/${URLParams.category}/${type}`
      ? [
          {
            to: `/configurator/${URLParams.category}`,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            label: tieList.data.find((el) => el.type === URLParams.category)!
              .categoryName,
          },
          {
            to: `/configurator/${URLParams.category}/${URLParams.type}`,
            label: URLParams.type,
          },
        ]
      : categoryRoutes;

  const routes = isPlains
    ? [...baseRoutes]
    : [
        { to: "/configurator", label: breadcrumbsList.data.config },
        ...typesRoutes,
      ];

  return (
    <div className="wrapper-breadcrumb">
      <div className="breadcrumb">
        <Link className="breadcrumb-link-house breadcrumb-not-active" to="/">
          <i className="fa fa-home" />
        </Link>
        {routes.map((item, key) => {
          if (routes.length - 1 === key) {
            return (
              <span
                key={item.to}
                className={
                  item.to === location.pathname
                    ? "breadcrumb-active"
                    : "breadcrumb-not-active"
                }
              >
                {item.label}
              </span>
            );
          } else {
            return (
              <Link
                key={item.to}
                className={
                  "breadcrumb-link" === location.pathname
                    ? "breadcrumb-active"
                    : "breadcrumb-not-active"
                }
                to={item.to}
              >
                {item.label}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Breadcrumbs;
