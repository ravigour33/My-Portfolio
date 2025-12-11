import React from "react";
import "./Banner.css";
import MyImage from "../../assets/ravi.png";
import MyImage2 from "../../assets/ravi2.png";

const Banner = () => {
  return (
    <section className="banner" id="banner">
      <div className="bInner">

        <div className="bLeft">
          <h1>Hi I'm Ravi Gour</h1>

          <h2>
            I develop user-friendly websites and applications that make a difference.
          </h2>

          <h3>Full Stack Developer</h3>
        </div>

        <div className="bRight">
          <img src={MyImage2} alt="Banner Image" />
        </div>

      </div>
    </section>
  );
};

export default Banner;
