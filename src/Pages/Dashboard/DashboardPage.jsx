import React, { useEffect, useRef } from "react";
import SwiperComponent from "./SwiperSlide";
import { Link } from "react-router-dom";
import QuotationIcon from "../../assets/Icons/QuotationIcon";
import ReactPlayer from "react-player";
import VideoTitleIcon from "../../assets/Icons/VideoTitleIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import TestimonialsSwiper from "./TestimonialsSwiper";
import EmbedMap from "./EmbedMap";

function DashboardPage() {
  const videoRef = useRef();

  useEffect(() => {
    const videoEl = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            videoEl.play();
          } else {
            videoEl.pause();
          }
        });
      },
      {
        threshold: [0.5],
      }
    );

    if (videoEl) {
      observer.observe(videoEl);
    }

    return () => {
      if (videoEl) observer.unobserve(videoEl);
    };
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__swiper">
        <SwiperComponent />
        <div className="interior-design-body">
          <div className="interior-design-title">
            <h1>Interior design & Home Decor</h1>
          </div>
          <div className="interior-design-buttons">
            <Link to="/" className="first__btn">
              INTERIOR DESIGN
            </Link>
            <Link to="/" className="second__btn">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="who-we-are">
          <div className="who-we-are__wrap">
            <div className="who-we-are__left">
              <img
                src="/who-we-are.png"
                alt="who-we-are"
                className="who-we-are__img"
              />
            </div>
            <div className="who-we-are__right">
              <div className="title__wrap">
                <div className="right__subtitle">Your Creative Partner</div>
                <div className="right__title">Who We Are</div>
              </div>
              <div className="content__wrap">
                <div className="content__top">
                  Artistic Elements is the premier luxury Showroom, and Interior
                  Design Studio in South Florida. It is led by husband & wife
                  team, Drew and Katya Thompson. Katya is an international
                  award-winning licensed Interior Designer and Drew is an MBA
                  and accomplished businessman. Their shared talents uniquely
                  allow for Artistic Elements to provide a Personalized Luxury
                  Experience like no other.
                </div>
                <div className="content__bottom">
                  Our Boutique showcases High-End Furniture • Unique Home
                  Accessories • Exquisite Art and Framing • Gorgeous Rugs •
                  Vibrant Lighting • Luscious Bedding and Much More
                </div>
              </div>
              <div className="right__btn">
                <Link to="/" className="content__link">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="interior-design-studio">
          <span className="quotation-icon">
            <QuotationIcon fill="#fff" />
          </span>
          <div className="interior-design-studio__text">
            Our Interior Design Studio is your creative partner, thoughtfully
            crafting your dreams into reality.
          </div>
        </div>

        <div className="consultation">
          <div className="consultation__left">
            <div className="consultation__title">
              <div className="title-top">Personalized Luxury</div>
              <div className="title-bottom">INTERIOR DESIGN</div>
            </div>
            <div className="consultation__content">
              <p className="content-item">
                We believe that luxury Interior Design should go beyond the
                visual, but to reflect the personalized style and functionality
                of our client. The concept of Personalized Luxury drives
                everything that we do. It is reflected in our bespoke designs,
                project management, through to completion. We are your creative
                partner, providing a turnkey solution to make your dreams a
                reality.
              </p>
            </div>
            <div className="consultation__btn">
              <Link className="get-consultation">GET CONSULTATION</Link>
            </div>
          </div>
          <div className="consultation__right">
            <img
              src="/consultation.png"
              alt="consultation"
              className="right__img"
            />
          </div>
        </div>

        <div className="video-wrap">
          <div className="video-wrap__title">
            <div className="title-top">Our latest completed project:</div>
            <div className="title-bottom">Boca Beach Residence</div>
            <div className="title-between">
              <span>3,600 Sq.Ft.</span>
              <span>
                <VideoTitleIcon />
              </span>
              <span>3 bed/2,5 bath</span>
            </div>
          </div>
          <div className="video-wrap__item">
            <ReactPlayer
              ref={videoRef}
              src="https://www.theartisticelements.com/wp-content/uploads/2024/09/Boca-Beach-House-1.mp4?_=1"
              controls
              playsInline
              muted
              width="100%"
              height="100%"
            />
          </div>
        </div>

        <div className="complate-projects">
          <div className="complate-projects-top">
            <div className="complate-projects-title">Completed Projects</div>
          </div>
          <div className="complate-projects-swiper">
            <Swiper
              slidesPerView={2}
              slidesPerGroup={1}
              spaceBetween={30}
              loop={true}
              speed={2000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className="swiper__wrapper"
            >
              <SwiperSlide className="swiper__slide">
                <div className="project-slide">
                  <img
                    className="projects-img"
                    src="/ComplateProject1.png"
                    alt="project-img"
                  />
                  <h2 className="project-slide-subtitle">
                    Boca Beach Residence
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <div className="project-slide">
                  <img
                    className="projects-img"
                    src="/ComplateProject2.png"
                    alt="project-img"
                  />
                  <h2 className="project-slide-subtitle">Armani Casa</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <div className="project-slide">
                  <img
                    className="projects-img"
                    src="/ComplateProject3.png"
                    alt="project-img"
                  />
                  <h2 className="project-slide-subtitle">
                    Palm Beach Ocean View
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <div className="project-slide">
                  <img
                    className="projects-img"
                    src="/ComplateProject4.png"
                    alt="project-img"
                  />
                  <h2 className="project-slide-subtitle">
                    Sophisticated Coastal Luxury
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <div className="project-slide">
                  <img
                    className="projects-img"
                    src="/ComplateProject5.png"
                    alt="project-img"
                  />
                  <h2 className="project-slide-subtitle">
                    Murano at Portofino
                  </h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper__slide">
                <div className="project-slide">
                  <img
                    className="projects-img"
                    src="/ComplateProject6.png"
                    alt="project-img"
                  />
                  <h2 className="project-slide-subtitle">
                    Intracoastal Remodel
                  </h2>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="showroom">
          <div className="showroom-left">
            <div className="left-video">
              <ReactPlayer
                src="https://www.theartisticelements.com/wp-content/uploads/2024/06/schowroom_video.mp4?_=2"
                controls
                muted
                loop={true}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="showroom-right">
            <div className="right-title">
              <div className="title-top">High-End Home Decor</div>
              <div className="title-bottom">Showroom</div>
            </div>
            <div className="right-content">
              Whether you are furnishing a room, redecorating an entire home, or
              simply want to style your bookshelves, our Showroom has it all. We
              offer only the best in high-end home decor, providing products
              from the most exclusive and luxurious brands from around the
              world. The Showroom has a complete offering of furniture, home
              accessories, art, lighting, rugs, drapery, pillows, bedding,
              mirrors, and framing. Our exceptional personalized service will
              provide your every need, offering design consultation with our
              licensed Interior Designers as well as white-glove delivery,
              setup, and installation.
            </div>
            <div className="right-btns">
              <Link to="/" className="btn-left">
                GO TO THE SHOWROOM
              </Link>
              <Link to="/" className="btn-right">
                SHOP ONLINE
              </Link>
            </div>
          </div>
        </div>

        <div className="imagine">
          <div className="imagine-back"></div>
          <div className="imagine-title">Imagine The Possibilities</div>
        </div>

        <div className="imagine-after">
          <span className="imagine-after-icon">
            <QuotationIcon fill="#1b3fa3" />
          </span>
          <div className="imagine-after-content">
            We provide a turnkey solution using the latest in technology to
            allow you to visualize your design throughout the process.
          </div>
        </div>

        <div className="our-world">
          <div className="our-world-left">
            <div className="left-title">Our World</div>
            <div className="left-content">
              If you are passionate about Interior Design and the Luxury
              Lifestyle, take a look into Our World. Check out our latest blogs
              and social media to see what inspires us, current projects, and
              our take on design elements.
            </div>
            <Link className="left-btn">READ BLOG</Link>
          </div>
          <div className="our-world-right">
            <img src="/our-world.png" alt="ourworld" />
          </div>
        </div>

        <TestimonialsSwiper />

        <EmbedMap />
      </div>
    </div>
  );
}

export default DashboardPage;
