import React from "react";
import QuotationIcon from "../../assets/Icons/QuotationIcon";
import { Link } from "react-router-dom";
import { projects } from "../../constants/data";

function OurWorks() {
  console.log(projects);
  return (
    <>
      <div className="projects">
        <div className="container">
          <div className="projects-wrap">
            <div className="projects-title">
              <p className="title">Projects</p>
              <p className="subtitle">
                <span className="icon">
                  <QuotationIcon fill="#001960" />
                </span>
                <span className="text">
                  You love your home. We help make this love endless.
                </span>
              </p>
            </div>
            <div className="projects-list">
              {projects.map((item) => (
                <div className="projects-list__item" key={item.id}>
                  <Link to={`/${item.id}`} className="projects-list__img">
                    <img src={item.image} alt="project-img" />
                  </Link>
                  <div className="projects-list__title">
                    <Link to={`/${item.id}`} className="title">
                      {item.title}
                    </Link>
                  </div>
                  <div className="projects-list__text">
                    <p className="top">{item.address}</p>
                    <p className="bottom">
                      {item.size} {item.rooms}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurWorks;
