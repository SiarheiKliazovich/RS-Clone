import "./calendar.scss";
import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import moment, { Moment } from "moment";
import "moment/locale/ru";
import { getOrders } from "../../../services/apiOrders";
import { CalendarDayType } from "../../../types";
import { IStore } from "../../../interfaces/store";
import { IUser } from "../../../interfaces/user";
import { IOrder } from "../../../interfaces/order";
import { IDayData } from "../../../interfaces/dayData";
import Day from "./Day";
import List from "./List";
import Hover from "../../Hover";
import Spinner from "../../Spinner";
import ErrorMessage from "../../ErrorMessage";
import {
  ordersFetched,
  ordersFetching,
  ordersFetchingError,
} from "../../../actions";

const Calendar: FunctionComponent = () => {
  const { t } = useTranslation("dataLang");
  const state = useSelector((state: IStore) => state);
  moment.locale(state.langReducer.lang);

  const loadingStatus = state.ordersReducer.ordersLoadingStatus;

  const user: IUser = useSelector((state: IStore) => state.auth.user);

  const [orders, setOrders] = useState<IOrder[]>([]);
  const [ordersDeadline, setOrdersDeadline] = useState<IOrder[]>([]);
  const [focusedDay, setFocusedDay] = useState<IDayData>({
    day: null,
    status: {
      nonPaid: [],
      paid: [],
      inProgress: [],
      declined: [],
      finished: [],
      deadline: [],
    },
  });
  const [viewedMonth, setViewedMonth] = useState<number>(moment().month());
  const [prevButton, setPrevButton] = useState<boolean>();
  const [nextButton, setNextButton] = useState<boolean>();

  const deadlineStep = 7;
  const dayDataArr: CalendarDayType[] = [];

  const dispatch = useDispatch();
  const getOrdersList = async () => {
    try {
      dispatch(ordersFetching());
      const orders = await getOrders();
      dispatch(ordersFetched(orders));
      setOrdersDeadline(prepareOrdersToDeadline(orders));
      setOrders(orders);
    } catch {
      dispatch(ordersFetchingError());
    }
  };

  const prepareOrdersToDeadline = (orders: IOrder[]) => {
    return orders
      .filter((order: IOrder) => order.status !== "FINISHED")
      .filter((order: IOrder) => order.status !== "DECLINED")
      .map((order: IOrder) => {
        order.deadlineDate = moment(order.date)
          .subtract(-deadlineStep, "day")
          .toISOString();
        return order;
      });
  };

  useEffect(() => {
    getOrdersList();
  }, []);

  const createCalendar = () => {
    const size = 42; // 7 days * 6 weeks
    let start =
      moment()
        .locale("en") // important!
        .subtract(moment().month() - viewedMonth, "month")
        .startOf("month")
        .startOf("isoWeek")
        .dayOfYear() - 1;

    if (state.langReducer.lang !== "ru") start = start - 1;

    const end = start + size;
    const now = moment().dayOfYear();

    const startI = now - end;
    const endI = now - start;

    for (let i = startI; i < endI; i++) {
      const day = moment().subtract(i, "day");
      const dayOrders = orders.filter((order) => {
        return day.year() !== moment().year()
          ? day.format("DD-MM") === moment(order.date).format("DD-MM")
          : day.isSame(order.date, "day");
      });

      addDataToDay(day, dayOrders);
    }
  };

  const addDataToDay = (day: Moment, orders: IOrder[]) => {
    const status = {
      nonPaid: [] as IOrder[],
      paid: [] as IOrder[],
      inProgress: [] as IOrder[],
      declined: [] as IOrder[],
      finished: [] as IOrder[],
      deadline: [] as IOrder[],
    };

    orders.forEach((order: IOrder) => {
      switch (order.status) {
        case "NON-PAID":
          status.nonPaid.push(order);
          break;
        case "PAID":
          status.paid.push(order);
          break;
        case "IN PROGRESS":
          status.inProgress.push(order);
          break;
        case "DECLINED":
          status.declined.push(order);
          break;
        case "FINISHED":
          status.finished.push(order);
          break;
      }
    });

    const ordersWithDeadline = ordersDeadline.filter((order) =>
      moment(order.deadlineDate).isSame(day, "day")
    );

    if (ordersWithDeadline.length) status.deadline.push(...ordersWithDeadline);

    dayDataArr.push({
      day: day,
      isActiveMonth: day.month() === viewedMonth,
      status: status,
    });
  };

  createCalendar();

  const changeMonth = (direction: number) => {
    const value = viewedMonth + direction;

    setNextButton(false);
    setPrevButton(false);

    if (viewedMonth === 10 && direction === 1) {
      setPrevButton(false);
      setNextButton(true);
    }
    if (viewedMonth === 1 && direction === -1) {
      setNextButton(false);
      setPrevButton(true);
    }

    setViewedMonth(value);
  };

  const titlesElements = Array(7)
    .fill(0)
    .map((item: string, i: number) => (
      <span className="calendar__title" key={i}>
        {moment().startOf("week").subtract(-i, "day").format("ddd")}
      </span>
    ));

  const daysComponents = dayDataArr
    .reverse()
    .map((item: CalendarDayType, i: number) => (
      <Day
        day={item.day}
        status={item.status}
        isActiveMonth={item.isActiveMonth}
        key={`${i}-${item.day.format("DD-MM")}`}
        setFocusedDay={setFocusedDay}
      />
    ));

  return (
    <>
      {loadingStatus === "loading" ? (
        <div className="dashboard__spinner">
          <Spinner />
        </div>
      ) : loadingStatus === "error" ? (
        <ErrorMessage />
      ) : (
        <>
          <h1 className="dashboard__header">
            {t("dashboard.headers.calendar")}
          </h1>
          <div className="calendar">
            <div className="calendar__wrapper">
              <div className="calendar__head">
                <div className="calendar__head-column">
                  <Hover>
                    <button
                      className="button calendar__button--left"
                      onClick={() => changeMonth(-1)}
                      disabled={prevButton}
                    >
                      {t("calendar.buttons.previous")}
                    </button>
                  </Hover>
                  <Hover>
                    <button
                      className="button calendar__button--right"
                      onClick={() => changeMonth(1)}
                      disabled={nextButton}
                    >
                      {t("calendar.buttons.next")}
                    </button>
                  </Hover>
                </div>
                <h2 className="calendar__subheader">
                  {moment()
                    .subtract(1 - viewedMonth, "month")
                    .format("MMMM")}
                </h2>
                <div className="calendar__head-column">
                  <Hover>
                    <button
                      className="button"
                      onClick={() => setViewedMonth(moment().month())}
                    >
                      {t("calendar.buttons.current")}
                    </button>
                  </Hover>
                </div>
              </div>
              <div className="calendar__container">{titlesElements}</div>
              <div className="calendar__container">{daysComponents}</div>
            </div>
            {focusedDay.day ? (
              <List day={focusedDay.day} status={focusedDay.status} />
            ) : null}
          </div>
        </>
      )}
    </>
  );
};

export default Calendar;
