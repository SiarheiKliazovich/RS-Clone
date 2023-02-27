import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  myTieDeleted,
  myTiesFetching,
  myTiesFetched,
  myTiesFetchingError,
} from "../../../actions";
import { deleteTie, getTiesByUserId } from "../../../services/apiTies";
import { IAuthReducer } from "../../../interfaces/authReducer";
import { IMyTiesListComponent } from "../../../interfaces/myTiesListComponent";

const MyTiesList: FunctionComponent<IMyTiesListComponent> = ({ ties }) => {
  const authStore = useSelector((state: IAuthReducer) => state.auth);
  const { user } = authStore;

  const dispatch = useDispatch();

  const { t } = useTranslation("dataLang");

  const deleteItem = async (id: string): Promise<void> => {
    try {
      await deleteTie(id);
      dispatch(myTieDeleted(id));
      dispatch(myTiesFetching());
      const ties = await getTiesByUserId(user._id);
      dispatch(myTiesFetched(ties));
    } catch {
      dispatch(myTiesFetchingError());
    }
  };

  return (
    <div className="market-block__products">
      <div className="row__products">
        {ties.length ? (
          ties.map((item, i) => {
            return (
              <div key={i} className="tie__product">
                <div className="tie__products_img">
                  <img src={item.image} alt="" className="products_img" />
                </div>
                <div className="tie__products_discription">
                  <div className="tie__products_name">
                    {t("myTies.name")}: {item.name}
                  </div>
                  <div className="tie__products_price">
                    {t("myTies.price")}: {item.price}$
                  </div>
                  <div className="tie__products_wrapper">
                    <button
                      className="btn__like"
                      onClick={() => deleteItem(item._id)}
                    >
                      <i className="fa fa-remove" />
                      {t("myTies.delete")}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="empty-message">{t("myTies.isEmptyMessage")}</p>
        )}
      </div>
    </div>
  );
};

export default MyTiesList;
