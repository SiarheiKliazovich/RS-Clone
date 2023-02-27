import "./dashboard.scss";
import { Routes, Route } from "react-router-dom";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../interfaces/store";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Profile from "../Profile";
import classNames from "classnames";
import Index from "./Index/index";
import Users from "./Users";
import Orders from "./Orders";
import Calendar from "./Calendar";

const Dashboard: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);

  const {
    accentColor,
    isSidebarFixed,
    isSidebarAccentMode,
    isNavbarNightMode,
    isProfileShow,
    isSidebarShow,
    isNightMode,
  } = interfaceSettings;

  return (
    <>
      <Header
        accentColor={accentColor}
        isNavbarNightMode={isNavbarNightMode}
        isButtonVisible={true}
      />
      <Profile
        accentColor={accentColor}
        isProfileShow={isProfileShow}
        isSidebarFixed={isSidebarFixed}
        isSidebarAccentMode={isSidebarAccentMode}
        isNavbarNightMode={isNavbarNightMode}
        isNightMode={isNightMode}
      />
      <Sidebar
        accentColor={accentColor}
        isSidebarFixed={isSidebarFixed}
        isSidebarAccentMode={isSidebarAccentMode}
        isSidebarShow={isSidebarShow}
        isNightMode={isNightMode}
      />
      <main
        className={classNames("dashboard", {
          "dashboard--indent": isSidebarFixed,
        })}
      >
        <div className="container container--full-width">
          <Routes>
            <Route path="" element={<Index />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="users" element={<Users />} />
            <Route path="orders" element={<Orders />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
