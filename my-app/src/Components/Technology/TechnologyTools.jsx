import React from "react";
import "./TechnologyTools.css";

import html from "../../assets/html (1).png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import jquery from "../../assets/social.png";
import tailwind from "../../assets/tailwind.png";
import reactjs from "../../assets/reactjs.png";
import redux from "../../assets/redux.png";
import wordpress from "../../assets/wordpress.png";
import php from "../../assets/php.png";
import shopify from "../../assets/shopify.png";
import mysql from "../../assets/database.png";
import mongodb from "../../assets/database (1).png";

import vscode from "../../assets/vscode.png";
import sublime from "../../assets/code.png";
import chatgpt from "../../assets/ChatGPT.png";
import ubuntu from "../../assets/ubuntu.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";


const ToolsTechnology = () => {
  return (
    <section className="toolsTechnology" id="technologies">
      <div className="toolsTinner">
        <h1>Technologies</h1>
        <p>
          We utilize a variety of tools and technologies to enhance our workflow
          and productivity. Below are some of the key tools we use:
        </p>

        <div className="technologyC">
          <div className="techItem"><img src={html} alt="Tool 1" /><p>HTML 5</p></div>
          <div className="techItem"><img src={css} alt="Tool 2" /><p>CSS 3</p></div>
          <div className="techItem"><img src={js} alt="Tool 3" /><p>JavaScript</p></div>
          <div className="techItem"><img src={jquery} alt="Tool 3" /><p>JQuery</p></div>
          <div className="techItem"><img src={tailwind} alt="Tool 4" /><p>Tailwind CSS</p></div>
          <div className="techItem"><img src={reactjs} alt="Tool 5" /><p>React JS</p></div>
          <div className="techItem"><img src={redux} alt="Tool 6" /><p>Redux</p></div>
          <div className="techItem"><img src={wordpress} alt="Tool 7" /><p>WordPress</p></div>
          <div className="techItem"><img src={php} alt="Tool 8" /><p>PHP</p></div>
          <div className="techItem"><img src={shopify} alt="Tool 8" /><p>Shopify</p></div>
          <div className="techItem"><img src={mysql} alt="Tool 8" /><p>MySQL</p></div>
          <div className="techItem"><img src={mongodb} alt="Tool 8" /><p>MongoDB</p></div>
        </div>
      </div>

      <div className="toolsTinner2">
        <h1>Tools</h1>

        <div className="toolsC">
          <div className="techItem"><img src={vscode} alt="Tool 1" /><p>VS Code</p></div>
          <div className="techItem"><img src={sublime} alt="Tool 2" /><p>Sublime</p></div>
          <div className="techItem"><img src={chatgpt} alt="Tool 3" /><p>ChatGPT</p></div>
          <div className="techItem"><img src={ubuntu} alt="Tool 3" /><p>Ubuntu</p></div>
          <div className="techItem"><img src={git} alt="Tool 4" /><p>Git</p></div>
          <div className="techItem"><img src={github} alt="Tool 5" /><p>GitHup</p></div>
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnology;
