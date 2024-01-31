
import "./intro.css"
import React, { useState, useEffect } from 'react';
import wheelImage from '../../img/wheelImage.png';
import jiantou from '../../img/5990.png_300.png';

const Intro = () => {
    const [rotation, setRotation] = useState(0);
const [isSpinning, setIsSpinning] = useState(false);

useEffect(() => {
  let interval;

  if (isSpinning) {
    interval = setInterval(() => {
      setRotation(prevRotation => prevRotation + 30);
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      const randomAngle = Math.random() * 360;
      setRotation(randomAngle);
      setTimeout(() => {
        setRotation(0);
        setIsSpinning(false);
      }, 5000);
    }, 3000);
  } else {
    interval = setInterval(() => {
      setRotation(prevRotation => (prevRotation + 1) % 360);
    }, 100);
  }

  return () => {
    clearInterval(interval);
  };
}, [isSpinning]);

const handleSpinClick = () => {
  if (!isSpinning) {
    setIsSpinning(true);
  }
};

const huanraoText = "I hope you enjoy my site,    click the lucky wheel to have some fun!                                 ";
const words = huanraoText.split("");
const totalWords = words.length;

const initialRotation =-45; // 初始旋转角度，从顶部开始环绕

const span = words.map((word, i) => {
    const rotation = initialRotation + (360 / totalWords) * i; // 根据单词位置计算旋转角度
    return (
        <span key={i} style={{ transform: `rotate(${rotation}deg)` }}>
            {word}
        </span>
    );
});


  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, I'm</h2>
                <h2 className='i-name'>Betty Niu</h2>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">FrontEnd Developer</div>
                        <div className="i-title-item">Full Stack Developer</div> 
                        <div className="i-title-item">eCommerce Manager</div>
                        <div className="i-title-item">Business Analyst</div>  
                        <div className="i-title-item">Willing to learn, unlearn, relearn.</div>   
                    </div>
                </div>
                <p className="i-desc">
                I’m a self-taught programmer, bootcamp grad, and, in a previous life, was an Ecommerce Manager. I know that transitioning into a new career path, especially in today's challenging job market, is no easy feat. Many people I know have chosen to give up, but deep down inside, I feel a strong determination.

                </p>
                <p>
                
                </p>
            </div>
            
        </div>
        <div className="i-right">
        <div className="huanrao-box">
            <div className="huanrao-text">{span}</div>
            <div className="i-img-box">
                 <img className="jiantou-img" src={jiantou} alt="" />
                  <img className="i-img" src={wheelImage} alt="The image is sourced from the internet and the copyright belongs to the original author." style={{ transform: `rotate(${rotation}deg)` }} onClick={handleSpinClick}/>
            </div>
        </div>
          
            
        </div>
    
    </div>
  )
}

export default Intro
