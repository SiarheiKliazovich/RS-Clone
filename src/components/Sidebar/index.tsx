import "./sidebar.scss";
import { FunctionComponent } from "react";

export type SidebarType = {
  accentColor: string;
  isSidebarFixed: boolean;
  isSidebarAccentMode: boolean;
};

const Sidebar: FunctionComponent<SidebarType> = ({
  accentColor,
  isSidebarFixed,
  isSidebarAccentMode,
}: SidebarType) => {
  const isSidebarFixedClass = isSidebarFixed ? "sidebar--fixed" : "";
  const updateSidebarStyle = () => {
    return isSidebarAccentMode
      ? { backgroundColor: accentColor, color: "#ffffff" }
      : { backgroundColor: "#ffffff", color: accentColor };
  };

  const itemColor = isSidebarAccentMode ? "#ffffff" : accentColor;

  return (
    <nav
      className={"sidebar " + isSidebarFixedClass}
      style={updateSidebarStyle()}
    >
      <div className="sidebar__wrapper">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke={itemColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sidebar__icon"
            >
              <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
              <polygon points="12 15 17 21 7 21 12 15"></polygon>
            </svg>
            <span className="sidebar__name">Dashboard</span>
          </li>
          <li className="sidebar__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke={itemColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sidebar__icon"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span className="sidebar__name">Calendar</span>
          </li>
          <li className="sidebar__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke={itemColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sidebar__icon"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="sidebar__name">Orders</span>
          </li>
          <li className="sidebar__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke={itemColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sidebar__icon"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="sidebar__name">Users</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
