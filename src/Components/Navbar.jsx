import { Link } from "react-router-dom";
import { navbar } from "../utils/constant";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [currentIcon, setCurrentIcon] = useState("mm");

  console.log(i18n.language);
  function handleLanguageChange(e) {
    e.preventDefault();
    if (i18n.language === "en") {
      setCurrentIcon("en");
      i18n.changeLanguage("mm");
    } else {
      setCurrentIcon("mm");
      i18n.changeLanguage("en");
    }
  }

  return (
    <header>
      <div className="header-area">
        <div className="main-header header-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-1">
                <div className="logo">
                  <Link to={"/"}>
                    <img src="/img/logo/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-10">
                <div className="menu-main d-flex align-items-center justify-content-end">
                  <div className="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <Link to="/">{t(`navbar.${navbar.HOME}`)}</Link>
                        </li>
                        <li>
                          <a href="/#about">{t(`navbar.${navbar.ABOUT}`)}</a>
                        </li>
                        <li>
                          <a href="/#services">
                            {t(`navbar.${navbar.SERVICES}`)}
                          </a>
                        </li>
                        <li>
                          <a href="/#doctors">
                            {t(`navbar.${navbar.DOCTORS}`)}
                          </a>
                        </li>
                        <li>
                          <Link to="/articles">
                            {t(`navbar.${navbar.BLOG}`)}
                          </Link>
                        </li>
                        <li>
                          <a href="/#contact">
                            {t(`navbar.${navbar.CONTACT}`)}
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="header-right-btn f-right d-none d-lg-block ml-30">
                    <img
                      onClick={handleLanguageChange}
                      src={`/img/logo/${currentIcon}.png`}
                      width={38}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
