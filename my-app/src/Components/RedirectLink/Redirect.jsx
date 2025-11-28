import React from "react";
import "./Redirect.css"; 

const RedirectLinks = () => {
  return (
    <section className="redirectLink">
      <div className="rLinner">

        <a href="#" className="btn">
          <span>React Projects</span>
        </a>

        <button className="btn btn-image" type="button">
          <span>WordPress Projects</span>
        </button>

        <button className="btn btn-image-blue" type="button">
          <span>Shopify Projects</span>
        </button>

      </div>
    </section>
  );
};

export default RedirectLinks;
