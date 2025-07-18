import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const Location = useLocation();

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

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
    }
  }, [Location.pathname]);

  return (
    <>
      <header className={`header ${showHeader ? "visible" : "hidden"}`}>
        <div className="container">
          <div className="header__wrap">
            <nav className="header__nav">
              <Link className="header__logo" to="/">
                <img src="/Logo.png" alt="logo" width={100} height={100} />
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
                  <Link className="header__link" to="/">
                    Kontaktlarimiz
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
