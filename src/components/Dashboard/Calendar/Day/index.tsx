import "./day.scss";
import { FunctionComponent } from "react";
import { CalendarDayType } from "../../../../types";
import classNames from "classnames";
import moment from "moment";
import { useTranslation } from "react-i18next";

const Day: FunctionComponent<CalendarDayType> = ({
  day,
  isActiveMonth,
  status,
  setFocusedDay,
}: CalendarDayType) => {
  const { t } = useTranslation("dataLang");

  const data = [
    {
      header: t("select.nonPaid"),
      value: status.nonPaid.length,
      style: "marker--non-pain",
    },
    {
      header: t("select.paid"),
      value: status.paid.length,
      style: "marker--pain",
    },
    {
      header: t("select.inProgress"),
      value: status.inProgress.length,
      style: "marker--in-progress",
    },
    {
      header: t("select.declined"),
      value: status.declined.length,
      style: "marker--declined",
    },
    {
      header: t("select.finished"),
      value: status.finished.length,
      style: "marker--finished",
    },
    {
      header: t("select.deadline"),
      value: status.deadline.length,
      style: "marker--deadline",
    },
  ];

  const markers = data
    .filter((item) => item.value !== 0) // delete markers with empty value
    .map((item) => (
      <li className={classNames("day__item", item.style)} key={item.header}>
        <span className="marker">{item.header}</span>
        <span className="day__count">x{item.value}</span>
      </li>
    ));

  const setDayProps = () => {
    if (setFocusedDay) setFocusedDay({ day: day, status: status });
  };

  return (
    <div
      className={classNames("day", {
        "day--today": moment().isSame(day, "day"),
      })}
      onClick={() => setDayProps()}
    >
      <h6
        className={classNames("day__header", {
          "day__header--active": isActiveMonth,
        })}
      >
        {day.format("DD")}
      </h6>
      <ul className="day__list">{markers}</ul>
    </div>
  );
};

export default Day;
