import React from 'react'
import logo from "../../assets/logo.png";


const Logo: React.FC = () => {
  return (
    <a href="/">
        <img className=' w-40 h-20' src={logo} alt="..." />
    </a>
  )
}

export default Logo