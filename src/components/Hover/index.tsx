import { cloneElement, FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import { HoverType } from "../../types";
import { IStore } from "../../interfaces/store";

const Hover: FunctionComponent<HoverType> = ({ children }: HoverType) => {
  const { accentColor } = useSelector((state: IStore) => state.appInterface);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {cloneElement(children, {
        style: {
          backgroundColor: isHovered ? accentColor.hover : accentColor.static,
        },
        onMouseOver: () => setIsHovered(true),
        onMouseOut: () => setIsHovered(false),
      })}
    </>
  );
};

export default Hover;
