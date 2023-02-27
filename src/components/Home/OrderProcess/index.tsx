import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import "./orderprocess.scss";
import orderprocess from "../../../data/orderprocess";
import Hover from "../../Hover";
import { Link } from "react-router-dom";
import { nightTheme } from "../../../data/constants";
import { OrderProcessType } from "../../../types/home";
import { ILangReducer } from "../../../interfaces/langReducer";

const OrderProcess: FunctionComponent<OrderProcessType> = ({
  accentColor,
  isNavbarNightMode,
}: OrderProcessType) => {
  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const list = orderprocess.find((c) => c.lang === lang)!;
  const backgroundColor = nightTheme.background.element;

  return (
    <div className="order-process__wrapper">
      <div className="banner-top"></div>
      <div className="order-process__banner">
        <div className="title-block">
          <h2 className="order-title">{list.data.title}</h2>
          <p className="order-title-text">{list.data.text}</p>
        </div>
        <div className="order-instruction-wrapper">
          <div className="order-instruction-block">
            <div className="image-order__wrapper">
              <span className="image-order first"></span>
              <div className="text-order__wrapper">
                <p className="instruction-block__text">{list.data.choose}</p>
              </div>
            </div>
            <div className="image-order__wrapper">
              <span className="image-order second"></span>
              <div className="text-order__wrapper">
                <p className="instruction-block__text">{list.data.apply}</p>
              </div>
            </div>
            <div className="image-order__wrapper">
              <span className="image-order third"></span>

              <div className="text-order__wrapper">
                <p className="instruction-block__text">{list.data.finish}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-link-wrapper">
          <Hover>
            <button
              className="button-link"
              style={{
                backgroundColor: isNavbarNightMode
                  ? backgroundColor
                  : accentColor.static,
              }}
            >
              <Link className="btn-video-link" to="/configurator">
                {list.data.button}
              </Link>
            </button>
          </Hover>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
