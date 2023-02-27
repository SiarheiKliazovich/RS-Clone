import "./list.scss";
import moment from "moment";
import { FunctionComponent, ReactElement } from "react";
import { CalendarListType } from "../../../../types";
import { IOrder } from "../../../../interfaces/order";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const Index: FunctionComponent<CalendarListType> = ({
  day,
  status,
}: CalendarListType) => {
  const { t } = useTranslation("dataLang");

  const elements: ReactElement[] = [];

  const setMarkerText = (status: string): { text: string; style: string } => {
    switch (status) {
      case "NON-PAID":
        return { text: t("select.nonPaid"), style: "marker--non-pain" };
      case "PAID":
        return { text: t("select.paid"), style: "marker--pain" };
      case "DECLINED":
        return { text: t("select.declined"), style: "marker--declined" };
      case "IN PROGRESS":
        return { text: t("select.inProgress"), style: "marker--in-progress" };
      case "FINISHED":
        return { text: t("select.finished"), style: "marker--finished" };
      case "DEADLINE":
        return { text: t("select.deadline"), style: "marker--deadline" };
      default:
        return { text: t("select.deadline"), style: "marker--deadline" };
    }
  };

  for (const key in status) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    status[key].forEach((item: IOrder) => {
      const s = moment(day).isSame(item.deadlineDate, "day")
        ? "DEADLINE"
        : item.status;

      const { style, text } = setMarkerText(s);

      const el = (
        <li
          className={classNames("table-line list__item", {
            "list__item--warning": moment(day).isSame(item.deadlineDate, "day"),
          })}
          key={item._id}
        >
          <span className="list__column">
            #{item._id.slice(-9).toUpperCase()}
          </span>
          <span className="list__column">
            <img className="list__image" src={item.image} alt="" />
          </span>
          <span className="list__column">
            {moment(item.date).format("D MMMM")}
          </span>
          <span className="list__column">{item.price}</span>
          <span className="list__column">
            <span className={classNames("marker", style)}>{text}</span>
          </span>
          <span
            className={classNames("list__column list__column--last", {
              "list__column--warning": day.isSame(
                moment(item.deadlineDate),
                "day"
              ),
            })}
          >
            {moment(item.deadlineDate).format("D MMMM")}
          </span>
        </li>
      );
      elements.push(el);
    });
  }

  return (
    <div className="list">
      <div className="list__wrapper">
        <h4 className="list__header">{moment(day).format("D MMMM")}</h4>
        <ul className="list__list">
          <li className="list__item">
            <span className="list__column">{t("calendar.list.id")}</span>
            <span className="list__column">{t("calendar.list.product")}</span>
            <span className="list__column">{t("calendar.list.date")}</span>
            <span className="list__column">{t("calendar.list.price")}</span>
            <span className="list__column">{t("calendar.list.status")}</span>
            <span className="list__column list__column--last">
              {t("calendar.list.deadline")}
            </span>
          </li>
          {elements}
        </ul>
      </div>
    </div>
  );
};

export default Index;
