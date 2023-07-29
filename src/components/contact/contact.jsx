import React from 'react'
import "./contact.css"
import { FaMapMarkerAlt,FaLinkedin,FaMailBulk,FaSmileWink } from 'react-icons/fa';
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
                    <h1 c-title>Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                        <FaMailBulk size={25}/><p className='ct'> bettychaoranniu@gmail.com</p>
                       </div>
                       <div className="c-info-item">
                       <FaMapMarkerAlt size={25}/><p className='ct'> Richmond, BC, Canada</p>
                       </div>
                       <div className="c-info-item">
                       <FaLinkedin size={25}/><p className='ct'>linkin</p>
                       </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b>Get in touch. Always freelancing if the right project comes along.
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
          <FaSmileWink size={20}/> Message submitted. Thank you!
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