import "./card.scss";
import { FunctionComponent } from "react";
import { CardType } from "../../../../types";

const Index: FunctionComponent<CardType> = ({
  colors,
  value,
  title,
  icon,
}: CardType) => {
  const addIconClass = () => {
    switch (icon) {
      case "like":
        return "card__icon--like";
      case "cart":
        return "card__icon--cart";
      case "chart":
        return "card__icon--chart";
      case "view":
        return "card__icon--view";
    }
  };

  return (
    <div className="card">
      <div className="card__column">
        <div
          className="card__round"
          style={{
            backgroundColor: colors.background,
            borderColor: colors.font,
          }}
        >
          <span className={`card__icon ${addIconClass()}`}></span>
        </div>
      </div>
      <div className="card__column">
        <h4 className="card__value">{value}</h4>
        <span className="card__title">{title}</span>
      </div>
    </div>
  );
};

export default Index;
