import { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import "./home.scss";
import { IStore } from "../../interfaces/store";
import InfoBlock from "./InfoBlock";
import Сarousel from "./Carousel";
import OrderProcess from "./OrderProcess";
import videoTie from "../../assets/video/videoTie.mp4";

const Home: FunctionComponent = () => {
  const interfaceSettings = useSelector((state: IStore) => state.appInterface);

  const { accentColor, isNavbarNightMode } = interfaceSettings;

  return (
    <>
      <main className="main">
        <div className="nav-block">
          <div className="container-fluid">
            <div className="row"></div>
          </div>
        </div>
        <div className="video-block">
          <video id="background-video" className="videoTag" autoPlay loop muted>
            <source src={videoTie} type="video/mp4" />
          </video>
        </div>
        <OrderProcess
          accentColor={accentColor}
          isNavbarNightMode={isNavbarNightMode}
        />
        <InfoBlock
          accentColor={accentColor}
          isNavbarNightMode={isNavbarNightMode}
        />
        <Сarousel
          accentColor={accentColor}
          isNavbarNightMode={isNavbarNightMode}
        />
        <div className="banner-wrapper"></div>
      </main>
    </>
  );
};

export default Home;
