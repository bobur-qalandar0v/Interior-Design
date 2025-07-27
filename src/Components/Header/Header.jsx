import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BurgerMenuIcon from "../../assets/Icons/BurgerMenuIcon";
import { Drawer } from "antd";

function Header() {
  const Location = useLocation();

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    switch (Location.pathname) {
      case "/":
        setActiveButton(null);
        break;
      case "/our-work":
        setActiveButton(1);
        break;
      case "/service-type":
        setActiveButton(2);
        break;
      case "/about-us":
        setActiveButton(3);
        break;
      case "/vacancy-order":
        setActiveButton(4);
        break;
      case "/our-team":
        setActiveButton(5);
        break;
      case "/contact":
        setActiveButton(6);
        break;
    }

    setOpen(false);
  }, [Location.pathname]);

  return (
    <>
      <header className={`header ${showHeader ? "visible" : "hidden"}`}>
        <div className="container">
          <div className="header__wrap">
            <nav className="header__nav">
              <Link className="header__logo" to="/">
                <img src="/Logo.png" alt="logo" className="header__logo__img" />
              </Link>
              <ul className="header__ul">
                <li>
                  <Link
                    className={`header__link ${
                      activeButton === 1 ? "active" : ""
                    }`}
                    to="/our-work"
                  >
                    <span>Proyektlar</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`header__link ${
                      activeButton === 2 ? "active" : ""
                    }`}
                    to="/service-type"
                  >
                    <span>Xizmat turlari</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`header__link ${
                      activeButton === 3 ? "active" : ""
                    }`}
                    to="/about-us"
                  >
                    <span>Biz haqimizda</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`header__link ${
                      activeButton === 4 ? "active" : ""
                    }`}
                    to="/vacancy-order"
                  >
                    <span>Vakansiya / Buyurtma berish</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`header__link ${
                      activeButton === 5 ? "active" : ""
                    }`}
                    to="/our-team"
                  >
                    <span>Bizning jamoa</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`header__link ${
                      activeButton === 6 ? "active" : ""
                    }`}
                    to="/contact"
                  >
                    <span>Kontaktlarimiz</span>
                  </Link>
                </li>
              </ul>
              <div className="burger-menu">
                <button className="burger-btn" onClick={showDrawer}>
                  <BurgerMenuIcon />
                </button>
              </div>
            </nav>
          </div>
        </div>
        <Drawer open={open} onClose={onClose}>
          <div className="drawer-wrap">
            <Link
              className={`drawer-link ${activeButton === 1 ? "active" : ""}`}
              to="/our-work"
            >
              Proyektlar
            </Link>
            <Link
              className={`drawer-link ${activeButton === 2 ? "active" : ""}`}
              to="/service-type"
            >
              Xizmat turlari
            </Link>
            <Link
              className={`drawer-link ${activeButton === 3 ? "active" : ""}`}
              to="/about-us"
            >
              Biz haqimizda
            </Link>
            <Link
              className={`drawer-link ${activeButton === 4 ? "active" : ""}`}
              to="/vacancy-order"
            >
              Vakansiya / buyurtma berish
            </Link>
            <Link
              className={`drawer-link ${activeButton === 5 ? "active" : ""}`}
              to="/our-team"
            >
              Bizing jamoa
            </Link>
            <Link
              className={`drawer-link ${activeButton === 6 ? "active" : ""}`}
              to="/contact"
            >
              Kontaktlarimiz
            </Link>
          </div>
        </Drawer>
      </header>
    </>
  );
}

export default Header;
