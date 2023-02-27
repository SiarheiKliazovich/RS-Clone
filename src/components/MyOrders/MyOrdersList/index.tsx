import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

import { IOrdersListComponent } from "../../../interfaces/ordersListComponent";

const MyOrdersList: FunctionComponent<IOrdersListComponent> = ({ orders }) => {
  const { t } = useTranslation("dataLang");

  return (
    <div className="market-block__products">
      <div className="row__products">
        {orders.length ? (
          orders.map((item, i) => {
            return (
              <div key={i} className="tie__product my-ties">
                <div className="tie__products_img">
                  <div>
                    <img className="products_img" src={item.image} alt="" />
                  </div>
                </div>
                <div className="tie__products_discription my-orders-list__item">
                  <p className="tie__products_name">{t("myOrders.data")}</p>
                  <div className="item__date">
                    {t("myOrders.date")}: {item.date.slice(0, 10)}
                  </div>
                  <div className="item__price">
                    {t("myOrders.sum")}: {item.price}$
                  </div>
                  <div className="item__status">
                    {t("myOrders.status")}: {item.status}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="empty-message">{t("myOrders.isEmptyMessage")}</p>
        )}
      </div>
    </div>
  );
};

export default MyOrdersList;
