import { FunctionComponent } from "react";

import { IOrdersListComponent } from "../../../interfaces/ordersListComponent";
import { useTranslation } from "react-i18next";

const MyTiesOrdersList: FunctionComponent<IOrdersListComponent> = ({
  orders,
}) => {
  const { t } = useTranslation("dataLang");

  return (
    <div className="market-block__products">
      <div className="row__products">
        {orders.length ? (
          orders.map((order, i) => {
            return (
              <div key={i} className="tie__product">
                <div className="tie__products_img">
                  <img src={order.image} alt="" className="products_img" />
                </div>
                <div className="tie__products_discription">
                  <div className="tie__products_name">
                    {t("myTiesOrders.date")}: {order.date.slice(0, 10)}
                  </div>
                  <div className="tie__products_price">
                    {t("myTiesOrders.sum")}: {order.price}$
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="empty-message">{t("myTiesOrders.isEmptyMessage")}</p>
        )}
      </div>
    </div>
  );
};

export default MyTiesOrdersList;
