
import React, { useState, useEffect } from 'react';
import './AutoRotatingWheel.css';
import wheelImage from '../../img/wheelImage.png';


function AutoRotatingWheel() {
//     const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const wheel = document.getElementById('wheel');

//     const rotationInterval = setInterval(() => {
//       if (isHovered && wheel) {
//         wheel.style.transform = `rotate(${(parseFloat(getComputedStyle(wheel).getPropertyValue('rotate')) || 0) + 1}deg)`;
//       }
//     }, 100); // 每100毫秒旋转1度

//     return () => {
//       clearInterval(rotationInterval);
//     };
//   }, [isHovered]);

//   return (
//     <div className="rotating-wheel" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
//     <div id="wheel" className={`wheel ${isHovered ? '' : 'spinning'}`}>
//         <img src={wheelImage} alt="大转盘" className="wheel-image" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />
//     </div>
//     </div>
//   );
// };


const [rotation, setRotation] = useState(0);
const [isSpinning, setIsSpinning] = useState(false);

useEffect(() => {
  let interval;

  if (isSpinning) {
    // Fast spinning for 3 seconds
    interval = setInterval(() => {
      setRotation(prevRotation => prevRotation + 30);
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      // Stop at a random angle for 5 seconds
      const randomAngle = Math.random() * 360;
      setRotation(randomAngle);
      setTimeout(() => {
        setRotation(0);
        setIsSpinning(false);
      }, 5000);
    }, 3000);
  } else {
    // Slow automatic spinning
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

return (
  <div>
    <img
      src={wheelImage} 
      alt="Lucky Wheel"
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={handleSpinClick}
    />
  </div>
);
};

export default AutoRotatingWheel;