import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header__background"></div>
      <div className="container">
        <header className="header">
          <nav className="header__nav">
            <Link className="header__logo" to="/">
              <img src="/Logo.png" alt="logo" width={100} height={100} />
            </Link>
            <ul className="header__ul">
              <li>
                <Link className="header__link" to="/">
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
              <li>
                <Link className="header__login" to="/">
                 Ro'yxatdan o'tish
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;
