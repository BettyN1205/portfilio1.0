import React from "react";
import "./about.css";
import Me from "../../img/me.jpeg";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaPython,
  FaNode,
  FaGitAlt,
  FaFigma,
  FaWordpress,
  FaNpm,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  BiLogoCPlusPlus,
  BiLogoPostgresql,
  BiLogoGithub,
} from "react-icons/bi";
import {
  SiCsharp,
  SiAdobephotoshop,
  SiAmazonaws,
  SiExpress,
  SiMysql,
  SiJira,
  SiPostman,
  SiOpenai,
} from "react-icons/si";
import { TbCircleLetterC, TbApi } from "react-icons/tb";

const About = () => {

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1bOMcsMOL3Iek7X3hZPx3Ywju1oh-2crs/view?usp=sharing', '_blank')
  };



  return (
    <div className="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-desc">
          Deep down, I love solving problems. It's a passion that I previously
          pursued in e-commerce operations, and it's the same drive I channel
          into software development now. I am a lover of arts, culture, design,
          and now, computer science. Thanks for taking the time to read my story
          and my web. Feel free to connect with me if you'd like to get in
          touch.
        </p>

        <p className="a-sub">
          PROFICIENT :{" "}
          <FaHtml5
            style={{ fontSize: "35px", marginRight: "5px", marginLeft: "10px" }}
          />
          <FaCss3Alt style={{ fontSize: "35px", marginRight: "5px" }} />
          <RiJavascriptFill style={{ fontSize: "35px" }} />
          <FaReact style={{ fontSize: "35px", marginRight: "5px" }} />
          <FaSass style={{ fontSize: "40px", marginRight: "5px" }} />
          <FaNode style={{ fontSize: "43px", marginRight: "7px" }} />
          <SiExpress style={{ fontSize: "35px", marginRight: "7px" }} />
          <SiMysql style={{ fontSize: "40px", marginRight: "5px" }} />
          <FaGitAlt style={{ fontSize: "40px", marginRight: "5px" }} />
          <BiLogoGithub style={{ fontSize: "35px", marginRight: "5px" }} />
          <SiJira style={{ fontSize: "30px", marginRight: "5px" }} />
          <SiPostman style={{ fontSize: "30px", marginRight: "5px" }} />
          <TbApi style={{ fontSize: "35px", marginRight: "5px" }} />
          <SiAdobephotoshop style={{ fontSize: "30px" }} />
        </p>
        <p className="a-sub">
          EXPERIENCED :{" "}
          <TbCircleLetterC style={{ fontSize: "40px", marginRight: "5px" }} />
          <BiLogoPostgresql style={{ fontSize: "35px", marginRight: "5px" }} />
          <FaFigma style={{ fontSize: "35px", marginRight: "5px" }} />
          <FaNpm style={{ fontSize: "35px", marginRight: "5px" }} />
        </p>

        <p className="a-sub">
          INTRODUCED :{" "}
          <SiAmazonaws
            style={{ fontSize: "35px", marginRight: "5px", marginLeft: "10px" }}
          />
          <FaPython style={{ fontSize: "35px" }} />
          <BiLogoCPlusPlus
            style={{ fontSize: "40px", marginRight: "5px", marginLeft: "10px" }}
          />
          <SiCsharp style={{ fontSize: "30px", marginRight: "5px" }} />
          <FaWordpress style={{ fontSize: "35px", marginRight: "5px" }} />
          <SiOpenai style={{ fontSize: "35px", marginRight: "5px" }} />
        </p>

        <button onClick={downloadResume}>Download My Resume</button>
      </div>
    </div>
  );
};

export default About;
