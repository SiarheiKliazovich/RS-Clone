import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import {
  deleteOrder,
  getOrders,
  updateOrder,
} from "../../../../services/apiOrders";
import {
  orderDeleted,
  ordersFetching,
  ordersFetched,
  ordersFetchingError,
} from "../../../../actions";
import { IOrdersListComponent } from "../../../../interfaces/ordersListComponent";
import OrdersListItem from "../OrdersListItem";
import { useTranslation } from "react-i18next";

import "./ordersList.scss";

const OrdersList: FunctionComponent<IOrdersListComponent> = ({ orders }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation("dataLang");

  const deleteItem = async (id: string) => {
    try {
      await deleteOrder(id);
      dispatch(orderDeleted(id));
      dispatch(ordersFetching());
      const orders = await getOrders();
      dispatch(ordersFetched(orders));
    } catch {
      dispatch(ordersFetchingError());
    }
  };

  const updateItem = async (id: string, status: string) => {
    try {
      if (status !== "EMPTY") {
        await updateOrder(id, { status: status });
        dispatch(ordersFetching());
        const orders = await getOrders();
        dispatch(ordersFetched(orders));
      }
    } catch {
      dispatch(ordersFetchingError());
    }
  };

  return (
    <>
      <div className="orders-list__wrapper">
        <div className="orders-list__item">
          <table>
            <tbody>
              <tr className="table-header">
                <th>#</th>
                <th>{t("ordersTable.date")}</th>
                <th>{t("ordersTable.price")}</th>
                <th>{t("ordersTable.status")}</th>
              </tr>
              {orders.map((item, i) => {
                return (
                  <OrdersListItem
                    key={item._id}
                    item={item}
                    i={i}
                    deleteItem={deleteItem}
                    updateItem={updateItem}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrdersList;
