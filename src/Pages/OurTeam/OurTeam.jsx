import React from "react";
import UnderLineIcon from "../../assets/Icons/UnderLineIcon";
import LeftArrow from "../../assets/Icons/LeftArrow";
import RightArrow from "../../assets/Icons/RightArrow";
import SmallIcon from "../../assets/Icons/SmallIcon";
import { persons } from "../../constants/data";

function OurTeam() {
  return (
    <div className="our-team">
      <div className="our-team__top">
        <div className="container">
          <div className="our-team__border">
            <div className="border-title">Our Team</div>
            <p className="border-text">
              The Artistic Elements’ design team is a group of talented and
              thoughtful designers, project managers, and marketers that take
              pride in providing only an exceptional experience. The combined
              business, technical, and creative expertise that is encompassed
              within our multi-cultural studio allows us to address and solve
              even the most demanding of projects.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="our-team__wrap">
          <div className="our-founders">
            <div className="top">
              <div className="top-left">
                <p className="text">Our Founders</p>
                <UnderLineIcon />
              </div>
              <div className="top-right">
                <div className="person-img__wrap">
                  <div className="img-wrap">
                    <img src="/OurTeam/our-team1.png" alt="image" />
                  </div>
                  <div className="content-wrap">
                    <h3 className="name">KATYA THOMPSON</h3>
                    <p>Director of Design, RID 12197</p>
                  </div>
                </div>
                <div className="person-content__wrap">
                  Katya is born and raised in Eastern Europe where she studied
                  Civil Engineering. When she moved to the United States, she
                  was immediately drawn to the exciting world of Interior
                  Design. After receiving a Bachelor of Science degree in
                  Interior Design from the University of Oklahoma, she launched
                  her career with several iconic fashion brands such as Fossil,
                  BCBG, Guess, Marc Jacobs and others, where she designed retail
                  storefronts in the US, Canada, London, Frankfurt, Singapore
                  and other major hubs all over the world. Being a Registered
                  Interior Designer led her to an opportunity with a Los Angeles
                  based designer focusing on high-end residential design. While
                  enjoying many aspects of architecture and engineering, Katya’s
                  true calling is Interior Design. She says it allows her to
                  express herself in a much more free and creative manner. Her
                  Eastern European background and worldly travels allow her to
                  incorporate a myriad of artistic elements into her work.
                  Katya’s mission is to provide a design that is uniquely
                  tailored to your aesthetic and lifestyle.
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-center">
                <div className="person-img__wrap">
                  <div className="img-wrap">
                    <img src="/OurTeam/our-team2.png" alt="image" />
                  </div>
                  <div className="content-wrap">
                    <h3 className="name">DREW THOMPSON</h3>
                    <p>President</p>
                  </div>
                </div>
              </div>
              <div className="person-content__wrap">
                Drew Thompson, an Illinois native, where his family has a 3rd
                generation electrical business. He received his B.S. in Business
                Management from Eckerd College in St. Petersburg FL, and an MBA
                from Millikin University in Decatur, IL. Throughout his career,
                he has held many executive roles to include his most recent role
                as CFO and Vice President of a large building product
                manufacture. In his unique role, he was responsible for working
                with designers and architects throughout the world specifying
                and custom building his products for their needs. Drew is able
                to provide Artistic Elements a unique benefit to its clients as
                he is able to bring expertise in project management, budget
                management, and vendor relations. It has been his dream to work
                with his wife Katya, and in February of 2020, they took the
                plunge and purchased Artistic Elements. He is excited to be able
                to bring a truly unique interior design experience to South
                Florida.
              </div>
            </div>
          </div>

          <div className="our-team__title">
            <div className="title-wrap">
              <span className="left-arrow">
                <LeftArrow />
              </span>
              <p className="title-text">Our Team</p>
              <span className="right-arrow">
                <RightArrow />
              </span>
            </div>
          </div>

          <div className="persons-card__wrap">
            {persons.map((item) => (
              <div className="persons-card__item" key={item.id}>
                <div className="img-wrap">
                  <img src={item.image} alt="person-img" />
                </div>
                <div className="person-info">
                  <h3 className="name">{item.name}</h3>
                  <p className="type-of-work">{item.typeOfWork}</p>
                  <p className="click">
                    <span>Click to Read Bio</span>{" "}
                    <span className="icon">
                      <SmallIcon />
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
