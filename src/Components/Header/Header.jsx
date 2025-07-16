import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
                  <Link className="header__link" to="/our-work">
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
                  <Link className="header__link" to="/">
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
