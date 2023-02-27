import { cloneElement, FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { ActiveType } from "../../types";
import { IStore } from "../../interfaces/store";

const Active: FunctionComponent<ActiveType> = ({ classN, children }) => {
  const { accentColor } = useSelector((state: IStore) => state.appInterface);

  return (
    <>
      {classN.indexOf("users__header-button_active") !== -1
        ? cloneElement(children, {
            style: {
              backgroundColor: accentColor.hover,
            },
          })
        : cloneElement(children, {
            style: {
              backgroundColor: accentColor.static,
            },
          })}
    </>
  );
};

export default Active;
