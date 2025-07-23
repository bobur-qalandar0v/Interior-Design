import React from "react";
import { Link } from "react-router-dom";
import LocationIcon from "../../assets/Icons/LocationIcon";
import TimeIcon from "../../assets/Icons/TimeIcon";
import PhoneIcon from "../../assets/Icons/PhoneIcon";
import FooterEmailIcon from "../../assets/Icons/FooterEmailIcon";
import FooterInstagramIcon from "../../assets/Icons/FooterInstagramIcon";
import FooterFaceBookIcon from "../../assets/Icons/FooterFaceBookIcon";
import FooterTelegramIcon from "../../assets/Icons/FooterTelegramIcon";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-left">
            <Link to="/">
              <img src="/Logo.png" alt="Logo" width={150} height={150} />
            </Link>
          </div>
          <div className="footer-right">
            <div className="artistic-elements">
              <div className="artistic-elements-title">ARTISTIC ELEMENTS</div>
              <div className="artistic-elements-links">
                <div className="location">
                  <span className="location-icon">
                    <LocationIcon />
                  </span>
                  <a
                    href="https://maps.google.com/maps?ll=41.551575,60.643683&z=17&t=h&hl=en&gl=US&mapclient=embed&cid=3198358649033384930"
                    target="_blank"
                    className="location-text"
                  >
                    HJ2V+JH6 Kirgiz Yap, 220100, Urgench, Xorazm Region
                  </a>
                </div>
                <div className="tel">
                  <span className="tel-icon">
                    <PhoneIcon />
                  </span>
                  <a href="tel:+998883056454" className="tel-text">
                    +998(99)999-99-99
                  </a>
                </div>
                <div className="email">
                  <span className="email-icon">
                    <FooterEmailIcon />
                  </span>
                  <a
                    href="mailto:qalandarovbobur274@gmail.com"
                    className="email-text"
                  >
                    Example@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="showroom-hours">
              <div className="showroom-hours-title">SHOWROOM HOURS</div>
              <div className="showroom-hours-links">
                <div className="working-time">
                  <span className="time-icon">
                    <TimeIcon />
                  </span>
                  <div className="working-time-text">
                    Monday - Friday 10:00 - 5:00 Saturday - by appointment
                  </div>
                </div>
                <div className="working-networks">
                  <Link to="/">
                    <FooterInstagramIcon />
                  </Link>
                  <Link to="/">
                    <FooterFaceBookIcon />
                  </Link>
                  <Link to="/">
                    <FooterTelegramIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className="featured-links">
              <div className="featured-links-title">FEATURED LINKS</div>
              <div className="links-wrap">
                <Link to="/" className="first">
                  PORTFOLIO
                </Link>
                <Link to="/" className="second">
                  SHOWROOM
                </Link>
                <Link to="/" className="last">
                  BLOG
                </Link>
              </div>
            </div>
            <div className="online-shop">
              <div className="online-shop-title">ONLINE SHOP</div>
              <div className="online-shop-wrap">
                <p className="online-shop-text">
                  Now you can place orders from our showroom online.
                </p>
                <Link to="/" className="online-shop-link">
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
