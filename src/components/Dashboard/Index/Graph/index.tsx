import "./graph.scss";
import { FunctionComponent, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  defaults,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import {
  specialColors,
  lightTheme,
  nightTheme,
} from "../../../../data/constants";
import { GraphType } from "../../../../types";
import moment from "moment";
import { IOrder, IOrderForGraph } from "../../../../interfaces/order";
import { useTranslation } from "react-i18next";
import Hover from "../../../Hover";

const Graph: FunctionComponent<GraphType> = ({ isNightMode, orders }) => {
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );

  defaults.font.size = 14;
  defaults.font.family = "Nunito, Roboto, sans-serif";

  defaults.color = isNightMode ? nightTheme.fontColor : lightTheme.fontColor;

  defaults.borderColor = isNightMode
    ? nightTheme.graph.gridColor
    : lightTheme.graph.gridColor;

  // ------------------------------------------------------------------------

  const { t } = useTranslation("dataLang");

  const [value, setValues] = useState<IOrderForGraph[]>([
    { label: "1", price: 0, count: 0 },
  ]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
        title: {
          display: true,
          text: t("index.graph.labelRevenue"),
        },
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        title: {
          display: true,
          text: t("index.graph.labelSales"),
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const prepareData = (period: string) => {
    const result = [];
    const format = period === "quarter" ? "MM-YYYY" : "DD-MM";
    const granularity = period === "quarter" ? "month" : "day";
    let ii = 3;

    if (period !== "quarter") {
      ii = period === "week" ? 7 : moment().date();
    }

    const obj =
      period === "quarter"
        ? orders
        : orders.filter(
            (order: IOrder) =>
              moment(order.date).quarter() === moment().quarter()
          );

    for (let i = 0; i < ii; i++) {
      const item = moment().subtract(i, granularity);

      const price = obj.reduce((res, order: IOrder) => {
        return order.status === "FINISHED" &&
          moment(order.date).isSame(item, granularity)
          ? res + order.price
          : res;
      }, 0 as number);

      const count = obj.reduce((res, order: IOrder) => {
        return order.status === "FINISHED" &&
          moment(order.date).isSame(item, granularity)
          ? res + 1
          : res;
      }, 0 as number);

      result.push({
        label: item.format(format),
        price: price,
        count: count,
      });
    }

    return result.reverse();
  };

  useEffect(() => setValues(prepareData("week")), [orders]);

  const data = {
    labels: value.map((item) => item.label),
    datasets: [
      {
        type: "bar" as const,
        label: t("index.graph.labelRevenue"),
        data: value.map((item) => item.price),
        backgroundColor: specialColors.aqua.background,
        borderColor: specialColors.aqua.font,
        borderWidth: 2,
        yAxisID: "y",
      },
      {
        type: "line" as const,
        label: t("index.graph.labelSales"),
        fill: false,
        data: value.map((item) => item.count),
        backgroundColor: specialColors.blue.font,
        borderColor: specialColors.blue.background,
        borderWidth: 4,
        yAxisID: "y1",
      },
    ],
  };

  return (
    <div className="graph">
      <div className="graph__wrapper">
        <div className="graph__head">
          <h3 className="graph__header">{t("index.graph.header")}</h3>
          <div>
            <Hover>
              <button
                className="button graph__button graph__button--left"
                onClick={() => setValues(prepareData("week"))}
              >
                {t("index.graph.buttonWeek")}
              </button>
            </Hover>
            <Hover>
              <button
                className="button graph__button graph__button--center"
                onClick={() => setValues(prepareData("month"))}
              >
                {t("index.graph.buttonMonth")}
              </button>
            </Hover>
            <Hover>
              <button
                className="button graph__button graph__button--right"
                onClick={() => setValues(prepareData("quarter"))}
              >
                {t("index.graph.buttonQuarter")}
              </button>
            </Hover>
          </div>
        </div>
        <div className="graph__container">
          <Chart
            className="graph__canvas"
            type="bar"
            options={options}
            data={data}
          />
        </div>
      </div>
    </div>
  );
};

export default Graph;
