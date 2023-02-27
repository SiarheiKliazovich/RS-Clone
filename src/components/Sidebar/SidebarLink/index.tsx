import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarIcon } from "../SidebarIcon";
import { SidebarLinkType } from "../../../types";

const SidebarLink: FunctionComponent<SidebarLinkType> = ({
  type,
  to,
  title,
  color,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link className="header__link" to={to}>
      <li
        className="sidebar__item"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <SidebarIcon
          color={isHovered ? color.hover : color.static}
          type={type}
        />
        <span
          style={{ color: isHovered ? color.hover : color.static }}
          className="sidebar__name"
        >
          {title}
        </span>
      </li>
    </Link>
  );
};

export default SidebarLink;
