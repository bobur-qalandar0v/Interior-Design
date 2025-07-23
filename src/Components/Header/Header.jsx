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
      case "/our-team":
        setActiveButton(2);
        break;
      case "/contact":
        setActiveButton(3);
        break;
    }
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
                    Proyektlar
                  </Link>
                </li>
                <li>
                  <Link className="header__link" to="/">
                    Xizmat turlari
                  </Link>
                </li>
                <li>
                  <Link className="header__link" to="/">
                    Biz haqimizda
                  </Link>
                </li>
                <li>
                  <Link className="header__link" to="/">
                    Vakansiya / Buyurtma berish
                  </Link>
                </li>
                <li>
                  <Link
                    className={`header__link ${
                      activeButton === 2 ? "active" : ""
                    }`}
                    to="/our-team"
                  >
                    Bizning jamoa
                  </Link>
                </li>
                <li>
                  <Link
                    className={`header__link ${
                      activeButton === 3 ? "active" : ""
                    }`}
                    to="/contact"
                  >
                    Kontaktlarimiz
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
          <p>Contents</p>
          <p>Contents</p>
          <p>Contents</p>
        </Drawer>
      </header>
    </>
  );
}

export default Header;
