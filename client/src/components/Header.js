import React, { useEffect } from "react";
import "../App.css"
import logo from '../assets/Planet.png'


const Header = () => {
  return (
    <div className='navbar header'>
      <div className='logo'>
        <img src={logo}/>
      </div>
    </div>
  )
}

export default Header