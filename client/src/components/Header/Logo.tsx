import React from 'react'
import logo from "../../assets/logo.png";
import {Link} from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to={"/"}>
        <img className=' w-40 h-20' src={logo} alt="..." />
    </Link>
  )
}

export default Logo