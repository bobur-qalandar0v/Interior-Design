import React from "react";
import QuotationIcon from "../../assets/Icons/QuotationIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
function TestimonialsSwiper() {
  return (
    <div className="testimonials">
      <div className="testimonials-title">Testimonials</div>
      <div className="testimonials-swiper">
        <Swiper
          centeredSlides={true}
          spaceBetween={30}
          speed={2000}
          loop={true}
          //   autoplay={{
          //     delay: 3000,
          //     disableOnInteraction: false,
          //   }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <div className="slide-wrap">
              <div className="slide-img">
                <img
                  className="slider__img"
                  src="/swiper1.jpg"
                  alt="swiper-img"
                />
              </div>
              <div className="slide-content">
                <div className="content-title">
                  <span className="quotation-icon">
                    <QuotationIcon fill="#1b3fa3" />
                  </span>
                  <div className="slide-content-title">
                    GREAT EYE FOR DETAIL
                  </div>
                </div>
                <div className="content-text">
                  <p className="first">
                    The new owners have added their own new look to Artistic
                    Elements. Katya, a licensed interior designer, has a great
                    eye for detail. While I only needed help with accessories
                    this trip, I look forward to going back to get their help on
                    a bigger picture -coordinating and customizing our open
                    concept kitchen/family space.
                  </p>
                  <p className="subtitle">- Grace</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrap">
              <div className="slide-img">
                <img
                  className="slider__img"
                  src="/swiper2.jpg"
                  alt="swiper-img"
                />
              </div>
              <div className="slide-content">
                <div className="content-title">
                  <span className="quotation-icon">
                    <QuotationIcon fill="#1b3fa3" />
                  </span>
                  <div className="slide-content-title">WONDERFUL STORE</div>
                </div>
                <div className="content-text">
                  <p className="first">
                    Artistic Elements is a wonderful store! Great selection of
                    beautiful home decor, pillows, artwork and custom framing.
                    The owner and staff are talented designers, very helpful and
                    a pleasure to work with. I have purchased so many beautiful
                    items from Artistic Elements! I love this store!
                  </p>
                  <p className="subtitle"> - Maria</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrap">
              <div className="slide-img">
                <img
                  className="slider__img"
                  src="/swiper3.jpg"
                  alt="swiper-img"
                />
              </div>
              <div className="slide-content">
                <div className="content-title">
                  <span className="quotation-icon">
                    <QuotationIcon fill="#1b3fa3" />
                  </span>
                  <div className="slide-content-title">
                    NEW OWNERS ARE GREAT
                  </div>
                </div>
                <div className="content-text">
                  <p className="first">
                    I always came in for custom framing. And they have the best
                    accessories selection. But now I was able to order wallpaper
                    and rugs for my condo. New owners are great! - Victoria
                  </p>
                  <p className="subtitle"> - Victoria</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrap">
              <div className="slide-img">
                <img
                  className="slider__img"
                  src="/swiper4.jpg"
                  alt="swiper-img"
                />
              </div>
              <div className="slide-content">
                <div className="content-title">
                  <span className="quotation-icon">
                    <QuotationIcon fill="#1b3fa3" />
                  </span>
                  <div className="slide-content-title">Absolute Pleasure</div>
                </div>
                <div className="content-text">
                  <p className="first">
                    We had the pleasure of working with Katya and Drew and their
                    fabulous team for the interior design of our home. From the
                    moment I reached out to Katya till the final reveal day of
                    our home(which was an absolute dream btw!), everything was
                    absolutely seamless(even if there was minor hiccups, the
                    team had the solutions before presenting us the problem).
                    Working with Katya and Drew on our home was an absolute
                    pleasure as they are genuinely lovely people and we look
                    forward to finding more areas in our home we will need their
                    help on!
                  </p>
                  <p className="subtitle"> - Mary-Kate</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrap">
              <div className="slide-img">
                <img
                  className="slider__img"
                  src="/swiper5.jpg"
                  alt="swiper-img"
                />
              </div>
              <div className="slide-content">
                <div className="content-title">
                  <span className="quotation-icon">
                    <QuotationIcon fill="#1b3fa3" />
                  </span>
                  <div className="slide-content-title">Beautiful Boutique</div>
                </div>
                <div className="content-text">
                  <p className="first">
                    Beautiful boutique! Lots of unique pieces! I always find the
                    best presents for my friends, family and clients at the
                    boutique. The owners - Katya and Drew - are friendly,
                    knowledgeable and creative and they have amazing staff. The
                    design studio that is run by Katya is fantastic! I engaged
                    them for interior design/decor for my primary residence and
                    was amazed how stunning everything came out. Recommended
                    them to several of my clients and family - everybody
                    absolutely loved working with them. Stop by and meet them
                    and shop around in the boutique!
                  </p>
                  <p className="subtitle">- Karina</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrap">
              <div className="slide-img">
                <img
                  className="slider__img"
                  src="/swiper6.jpg"
                  alt="swiper-img"
                />
              </div>
              <div className="slide-content">
                <div className="content-title">
                  <span className="quotation-icon">
                    <QuotationIcon fill="#1b3fa3" />
                  </span>
                  <div className="slide-content-title">Selection Of Gifts</div>
                </div>
                <div className="content-text">
                  <p className="first">
                    Artistic Elements has fabulous home furnishings,
                    contemporary curated art, & a selection of gifts for your
                    home - second to none in Boca Raton, FL. Their selection of
                    gifts, moldings for framing, for that special art piece, is
                    extensive. Artistic Elements is a one stop shop for gifts
                    this holiday season! Great service in a welcoming shopping
                    experience! East Palmetto Park Rd in Boca Raton, simply the
                    best!
                  </p>
                  <p className="subtitle">- Loretta</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default TestimonialsSwiper;
