import { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import "./infoblock.scss";
import classNames from "classnames";
import { InfoBlockType } from "../../../types/home";
import infoSection from "../../../data/infoSection";
import { ILangReducer } from "../../../interfaces/langReducer";
import { IStore } from "../../../interfaces/store";
import { nightTheme, lightTheme } from "../../../data/constants";

const InfoBlock: FunctionComponent<InfoBlockType> = ({
  accentColor,
  isNavbarNightMode,
}: InfoBlockType) => {
  const [tab, setTab] = useState<number>(1);
  const { lang } = useSelector((state: ILangReducer) => state.langReducer);
  const { isNightMode } = useSelector((state: IStore) => state.appInterface);
  // eslint-disable-next-line
  const list = infoSection.find((c) => c.lang === lang)!;

  return (
    <section className="section-space">
      <div
        className="section-space__banner"
        style={{
          backgroundColor: isNightMode
            ? nightTheme.background.page
            : lightTheme.background.page,
          opacity: 0.9,
        }}
      >
        <div className="container">
          <div
            className="row-points-wrapper"
            style={{
              backgroundColor: isNightMode
                ? lightTheme.background.page
                : nightTheme.background.page,
            }}
          >
            <div className="points-wrapper">
              <div className="custom-tab">
                <ul
                  className="custom-tab__nav_list"
                  style={{
                    backgroundColor: isNightMode
                      ? nightTheme.background.page
                      : lightTheme.background.page,
                  }}
                >
                  {list.data.map((item, index) => (
                    <li
                      className="custom-tab__item"
                      key={item.question}
                      style={{
                        color: isNavbarNightMode ? "#ffffff" : "#303030",
                      }}
                    >
                      <h5
                        className={classNames("tab-title", {
                          "tab-title-select": tab === index + 1,
                        })}
                        style={{
                          backgroundColor:
                            tab === index + 1 ? accentColor.static : "",
                        }}
                        onClick={() => setTab(index + 1)}
                      >
                        {item.question}
                      </h5>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="points-info-block">
              {tab === 1 && (
                <div className="tab-pane-content">
                  {list.data[0].answer.map((answer) => (
                    <p className="tab-pane__text" key={answer}>
                      {answer}
                    </p>
                  ))}
                </div>
              )}
              {tab === 2 && (
                <div className="tab-pane-content">
                  {list.data[1].answer.map((answer) => (
                    <p className="tab-pane__text" key={answer}>
                      {answer}
                    </p>
                  ))}
                </div>
              )}
              {tab === 3 && (
                <div className="tab-pane-content">
                  {list.data[2].answer.map((answer) => (
                    <p className="tab-pane__text" key={answer}>
                      {answer}
                    </p>
                  ))}
                </div>
              )}
              {tab === 4 && (
                <div className="tab-pane-content">
                  {list.data[3].answer.map((answer) => (
                    <p className="tab-pane__text" key={answer}>
                      {answer}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InfoBlock;
