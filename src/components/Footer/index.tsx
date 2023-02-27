import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import "./footer.scss";
import { FooterType } from "../../types/footer";
import { nightTheme } from "../../data/constants";
import { Link } from "react-router-dom";
import footer from "../../data/footer";
import { ILangReducer } from "../../interfaces/langReducer";

const Footer: FunctionComponent<FooterType> = ({
  accentColor,
  isNavbarNightMode,
}: FooterType) => {
  const backgroundColor = nightTheme.background.element;
  const { lang } = useSelector((state: ILangReducer) => state.langReducer);

  // eslint-disable-next-line
  const list = footer.find((c) => c.lang === lang)!;

  return (
    <div
      className="footer"
      style={{
        backgroundColor: isNavbarNightMode
          ? backgroundColor
          : accentColor.static,
      }}
    >
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer__columns_section">
            <div className="section__logo">
              <Link to={"/"}>
                <span className="footer-logo"></span>
              </Link>
            </div>
            <div className="section__menu">
              <h3 className="footer-title">{list.data.menu}</h3>
              <ul className="footer__section__list">
                <li className="footer__list_item">
                  <Link className="footer__list_item-link" to={"/"}>
                    {list.data.home}
                  </Link>
                </li>
                <li className="footer__list_item">
                  <Link className="footer__list_item-link" to={"/configurator"}>
                    {list.data.config}
                  </Link>
                </li>
                <li className="footer__list_item">
                  <Link className="footer__list_item-link" to={"/tie-market"}>
                    {list.data.market}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="section__contact">
              <h3 className="footer-title">{list.data.contact}</h3>
              <ul className="footer__section__list">
                <li className="footer__list_item">
                  <Link className="footer__list_item-link" to="">
                    <span className="footer__contact-icon-phone"></span>
                    <span className="footer__contact-value">0123 456 7890</span>
                  </Link>
                </li>
                <li className="footer__list_item">
                  <Link className="footer__list_item-link" to="">
                    <span className="footer__contact-icon-email"></span>
                    <span className="footer__contact-value">info@tiecreators.com</span>
                  </Link>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-footer">
          <div className="copyright-wrapper">
            <div className="copyright__column">
              <span className="copyright-text">Copyright 2023</span>
            </div>
            <div className="copyright__column">
              <Link
                className="copyright-footer__link"
                to="https://github.com/siarheikliazovich"
                target="_blank"
                title="Github: siarheikliazovich"
              ></Link>
              <Link
                className="copyright-footer__link"
                to="https://github.com/anast-ananko"
                target="_blank"
                title="Github: anast-ananko"
              ></Link>
              <Link
                className="copyright-footer__link"
                to="https://github.com/ablbsk"
                target="_blank"
                title="Github: ablbsk"
              ></Link>
            </div>
            <div className="copyright__column">
              <Link
                className="logo-link"
                to="https://rs.school"
                target="_blank"
                title="Rolling Scope School: JavaScript course"
              ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
