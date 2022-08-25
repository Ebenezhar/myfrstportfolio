import React from "react";
import ebe1 from "./newfolder/ebe1.jpg";

function Info() {
  return (
    <div className="container info-container">
      <div className="row info">
        <div className="col-lg-9 info1">
          <div className="col p-5">
            <h1 className="header1" data-aos-once="true" data-aos="fade-right">
              Full Stack
            </h1>
            <h1 className="header1" data-aos-once="true" data-aos="fade-right">
              Developer.
            </h1>
            <p
              className="para1 pt-4"
              data-aos-once="true"
              data-aos="fade-right"
            >
              I belive in web design can be more diverse and inspiring. With a
              mission to present the possibilities of web design, I am pursuing
              new expressions through experiments and thoughts.
            </p>
          </div>
          <div className="quote pt-5">
            <p className="para2" data-aos-once="true" data-aos="fade-up">
              Seize your moment
            </p>
          </div>
        </div>
        <div className="col-lg-3 info2">
          <div
            className="profile-box"
            data-aos-once="true"
            data-aos="fade-left"
          >
            <img className="profile-pic" src={ebe1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
