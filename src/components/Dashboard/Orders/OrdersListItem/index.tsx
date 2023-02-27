import { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { lightTheme, nightTheme } from "../../../../data/constants";
import { IStore } from "../../../../interfaces/store";
import { IOrdersListItem } from "../../../../interfaces/ordersListItem";
import Hover from "../../../Hover";

const OrdersListItem: FunctionComponent<IOrdersListItem> = ({
  item,
  i,
  deleteItem,
  updateItem,
}) => {
  const appInterfaceStore = useSelector((state: IStore) => state.appInterface);
  const { isNightMode, isNavbarNightMode, accentColor } = appInterfaceStore;

  const { t } = useTranslation("dataLang");

  const [selectedValue, setSelectedValue] = useState("EMPTY");

  const backgroundColor = isNightMode
    ? nightTheme.background.element
    : lightTheme.background.element;

  const color = nightTheme.background.element;

  let statusText = null;

  const addStatusStyle = () => {
    switch (item.status) {
      case "NON-PAID":
        statusText = t("select.nonPaid");
        return "marker marker--non-pain";
      case "PAID":
        statusText = t("select.paid");
        return "marker marker--pain";
      case "IN PROGRESS":
        statusText = t("select.inProgress");
        return "marker marker--in-progress";
      case "DECLINED":
        statusText = t("select.declined");
        return "marker marker--declined";
      case "FINISHED":
        statusText = t("select.finished");
        return "marker marker--finished";
    }
  };

  return (
    <>
      <tr className="table-line">
        <th>{i + 1}</th>
        <th>{item.date.slice(0, 10)}</th>
        <th>{item.price}</th>
        <th>
          <span className={addStatusStyle()}>{statusText}</span>
        </th>
        <th className="table-select">
          <select
            className="select"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            style={{ color }}
          >
            <option value="EMPTY" disabled hidden>
              {t("select.change")}
            </option>
            <option value="NON-PAID">{t("select.nonPaid")}</option>
            <option value="PAID">{t("select.paid")}</option>
            <option value="DECLINED">{t("select.declined")}</option>
            <option value="IN PROGRESS">{t("select.inProgress")}</option>
            <option value="FINISHED">{t("select.finished")}</option>
          </select>
        </th>
        <th>
          <Hover>
            <button
              style={{
                backgroundColor: isNavbarNightMode
                  ? backgroundColor
                  : accentColor.static,
              }}
              className="button button-apply"
              onClick={() => updateItem(item._id, selectedValue)}
            >
              {t("ordersTable.apply")}
            </button>
          </Hover>
        </th>
        <th>
          <button
            className="button button__delete-order"
            onClick={() => deleteItem(item._id)}
          >
            <i className="fa fa-remove"></i>
            {t("ordersTable.delete")}
          </button>
        </th>
      </tr>
    </>
  );
};

export default OrdersListItem;
