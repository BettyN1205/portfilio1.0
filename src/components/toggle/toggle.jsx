import React, { useContext } from 'react'
import "./toggle.css"
import { FaSun,FaMoon } from "react-icons/fa";
import { ThemeContext} from '../../context';

const Toggle = () => {
    const theme=useContext(ThemeContext);

    const handleClick=()=>{
        theme.dispatch({type:"TOGGLE"})
    }
    
  return (
    <div className='t'>
        <div className="t-icom" ><FaSun color='orange'/></div>
        <div className="t-icom" ><FaMoon color='orange'/></div>
        <div className="t-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
    </div>
  )
}

export default Toggle