import React from 'react'
import "./about.css"
import Me from "../../img/Open Doodles - Float.png"
import { FaHtml5, FaCss3Alt,FaReact,FaUnity,FaPython} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoCPlusPlus,BiLogoPostgresql,BiLogoGithub } from "react-icons/bi";
import { SiCsharp,SiAdobephotoshop,SiAmazonaws } from "react-icons/si";
import { TbCircleLetterC } from "react-icons/tb";

const About = () => {
  return (
    <div className='about'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Me} alt="" className='a-img'/>
            </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'> amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut la</p>
            <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>

        <p className='a-sub'>FrontEnd Skill : <FaHtml5/><FaCss3Alt/><FaReact/><RiJavascriptFill/></p>
        <p className='a-sub'>BackEnd Skill : <BiLogoCPlusPlus/><SiCsharp/><TbCircleLetterC/><BiLogoPostgresql/><FaPython/></p>
        <p className='a-sub'>Other Skill : <SiAmazonaws/><BiLogoGithub/><SiAdobephotoshop/></p>
        
            
        </div>
    </div>
  )
}

export default About