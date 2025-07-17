import React from "react";
import Header from "./Components/Header/Header";
import { Link, Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import EmailIcon from "./assets/Icons/EmailIcon";
import FaceBookIcon from "./assets/Icons/FaceBookIcon";
import InstagramIcon from "./assets/Icons/InstagramIcon";
import TelegramIcon from "./assets/Icons/TelegramIcon";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main className="main">
        <div className="networks">
          <div className="networks__wrap">
            <Link className="network__icons">
              <EmailIcon />
            </Link>
            <Link className="network__icons">
              <FaceBookIcon />
            </Link>
            <Link className="network__icons">
              <InstagramIcon />
            </Link>
            <Link className="network__icons">
              <TelegramIcon />
            </Link>
          </div>
        </div>
        <Routes>
          {routes.map((item) => (
            <Route key={item.id} path={item.path} element={item.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
