import React from 'react'
import "./contact.css"
import { FaMapMarkerAlt,FaLinkedin,FaMailBulk,FaSmileWink,FaGithub } from 'react-icons/fa';
import {useRef} from "react";
import {useState} from "react";
import emailjs from 'emailjs-com';
import { useContext } from 'react';
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef=useRef();
    const [done,setDone]=useState(false);
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_tepfibs', 'template_vh8f1lt', formRef.current, 'LB_6HNR6PDRBb1za9')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className='c'>
        <div className="c-bg">
        </div>
        <div className="c-wrapper">
                <div className="c-left">
                    <h1 c-title>Get in touch with me!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                        <FaMailBulk size={25}/><p className='ct'> bettychaoranniu@gmail.com</p>
                       </div>
                       <div className="c-info-item">
                       <FaMapMarkerAlt size={25}/><p className='ct'> Richmond, BC, Canada</p>
                       </div>
                       <div className="c-info-item">
                       <FaLinkedin size={25}/><p className='ct'> <a target="_blank" href='http://www.linkedin.com/in/bettychaoranniu'>linkedin.com/in/bettychaoranniu</a> </p>
                       </div>

                       <div className="c-info-item">
                       <FaGithub size={25}/><p className='ct'> <a target="_blank" href='https://github.com/BettyN1205'> github.com/BettyN1205</a> </p>
                       </div>

                      
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>send your message directly </b>Fill out the form and click 'submit' to send.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type='text' placeholder='Name' name="user_name"></input>
                        <input style={{backgroundColor: darkMode && "#333"}} type='text' placeholder='Subject' name="user_subject"></input>
                        <input style={{backgroundColor: darkMode && "#333"}} type='text' placeholder='Email' name="user_email"></input>
                        <textarea placeholder='Message' name="message" rows="5"></textarea>
                        <button style={{ display: done ? 'none' : 'block' }}>submit</button>
                        <span>
                        {done && (
        <>
          <FaSmileWink style={{fontSize: '25px', marginRight:'10px'}}/>Got your message! I'll get back to you in a jiffy. 🚀
        </>
      )}
                        </span>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Contact