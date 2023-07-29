import React from 'react'
import "./intro.css"
import Me from "../../img/Open Doodles - Float.png"

const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h2 className='i-name'>Betty Niu</h2>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div> 
                        <div className="i-title-item">FrontEnd Developer</div>
                        <div className="i-title-item">Game Developer</div>  
                        <div className="i-title-item">AI Developer</div>   
                    </div>
                </div>
                <p className="i-desc">
                    Be Willing to learn, unlearn, relearn. Stay Curious, Stay Agile.
                </p>
            </div>
            
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
        
            <img src={Me} alt="" className='i-img' />
        </div>
    
    </div>
  )
}

export default Intro
