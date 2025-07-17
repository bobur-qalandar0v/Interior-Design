import React from "react";

function ProjectItem() {
  return (
    <>
      <div className="container">
        <div className="projects-item">
          <div className="projects-item__wrap">
            <div className="projects-item__left">
              <div className="left-content">
                <div className="title-wrap">
                  <h3 className="main-title">Murano At Portofino</h3>
                  <div className="contents-wrap">
                    <div className="contents-location">
                      <span className="location">Location: </span>
                      <span className="location-value">Miami, FL</span>
                    </div>

                    <div className="contents-type">
                      <span className="type">Type: </span>
                      <span className="type-value">Condo, Furnishing</span>
                    </div>

                    <div className="contents-size">
                      <span className="size">Size: </span>
                      <span className="size-value">3,905 sq.ft.</span>
                    </div>

                    <div className="contents-rooms">
                      <span className="rooms">Rooms: </span>
                      <span className="rooms-value">3 Beds, 3.5 Baths</span>
                    </div>
                  </div>
                </div>

                <div className="problem">
                  <div className="problem-title">
                    <h3 className="title">Problem</h3>
                  </div>
                  <div className="problem-content">
                    <p className="text">
                      The homeowners wanted a space that felt both luxurious and
                      inviting—a sanctuary that maximized natural light,
                      embraced Miami’s vibrant energy, and reflected their
                      sophisticated taste. The challenge was to create a
                      seamless design that enhanced the unique curved
                      architecture of the building while maintaining a warm and
                      elegant atmosphere.
                    </p>
                  </div>
                </div>

                <div className="solutions">
                  <div className="solutions-title">
                    <h3 className="title">Solutions</h3>
                  </div>
                  <div className="solutions-content">
                    <p className="text">
                      Our approach was to blend modern luxury with organic
                      forms, using earthy tones and gold accents to create a
                      refined yet welcoming ambiance. The curved
                      floor-to-ceiling windows became a focal point, inspiring a
                      design language of soft curves throughout the interior.
                      Custom elements, from mirrors and columns to bespoke
                      furniture, elevated the space with a sense of artistry and
                      exclusivity.
                    </p>
                  </div>
                </div>

                <div className="scope-of-work">
                  <h3 className="scope-of-work__title">Scope of Work</h3>
                  <ul className="left-ul">
                    <li>Concept development;</li>
                    <li>Interior Design;</li>
                    <li>3D Visualization;</li>
                    <li>Furniture & Accessories Selection;</li>
                    <li>Procurement;</li>
                    <li>Construction Administration.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="projects-item__right">
              <div className="right-top__img">
                <img
                  className="top-img"
                  src="/ProjectItemImg/project-item1.png"
                  alt="project-img"
                />
                <img
                  className="top-img"
                  src="/ProjectItemImg/project-item2.png"
                  alt="project-img"
                />
                <img
                  className="top-img"
                  src="/ProjectItemImg/project-item1.png"
                  alt="project-img"
                />
              </div>
              <div className="right-center__img">
                <div className="centery-top">
                  <img
                    className="centery-top__img"
                    src="/ProjectItemImg/project-item1.png"
                    alt="project-img"
                  />
                  <img
                    className="centery-top__img"
                    src="/ProjectItemImg/project-item2.png"
                    alt="project-img"
                  />
                </div>
                <div className="centery-center">
                  <img
                    className="centery-center__img"
                    src="/ProjectItemImg/project-item1.png"
                    alt="project-img"
                  />
                  <img
                    className="centery-center__img"
                    src="/ProjectItemImg/project-item2.png"
                    alt="project-img"
                  />
                </div>
                <div className="centery-bottom">
                  <img
                    className="centery-bottom__img"
                    src="/ProjectItemImg/project-item1.png"
                    alt="project-img"
                  />
                  <img
                    className="centery-bottom__img"
                    src="/ProjectItemImg/project-item2.png"
                    alt="project-img"
                  />
                </div>
              </div>
              <div className="right-bottom__img">
                <img
                  className="bottom-img"
                  src="/ProjectItemImg/project-item1.png"
                  alt="project-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
