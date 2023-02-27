import "./circular-progress.scss";
import { FunctionComponent } from "react";
import { CircularProgressType } from "../../../../types";
import { specialColors } from "../../../../data/constants";
import { useTranslation } from "react-i18next";

const CircularProgress: FunctionComponent<CircularProgressType> = ({
  monthRevenue,
  todaySales,
}) => {
  const progress = Math.round((monthRevenue.current / monthRevenue.prev) * 100);
  const size = 200;
  const strokeWidth = 20;
  const arcLength = 2 * Math.PI * (size / 2 - strokeWidth); // = 2*PI*R
  const n = progress > 100 ? 100 : progress;
  const progressArcLength = (arcLength * ((100 - n) / 100)).toFixed(1);

  const { t } = useTranslation("dataLang");

  return (
    <div className="circular-progress">
      <h3 className="circular-progress__header">{t("index.widget.header")}</h3>
      <div className="circular-progress__container">
        <svg className="circular-progress__indicator">
          <circle
            className="circular-progress__track"
            stroke={specialColors.red.background}
          />
          <circle
            className="circular-progress__indication"
            stroke={specialColors.red.font}
            strokeDasharray={arcLength}
            strokeDashoffset={progressArcLength}
          />
        </svg>
        <div className="circular-progress__center">
          <span>{t("index.widget.title")}</span>
          <span>{progress}%</span>
        </div>
      </div>
      <div>
        <h5 className="circular-progress__subtitle">
          {t("index.widget.today")}
        </h5>
        <h2 className="circular-progress__today">${todaySales}</h2>
      </div>
      <div className="circular-progress__additional">
        <div className="circular-progress__month">
          <h6 className="circular-progress__small-title">
            {t("index.widget.prevMonth")}
          </h6>
          <p className="circular-progress__value">${monthRevenue.prev}</p>
        </div>
        <div className="circular-progress__month">
          <h6 className="circular-progress__small-title">
            {t("index.widget.currentMonth")}
          </h6>
          <p className="circular-progress__value">${monthRevenue.current}</p>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
