import React from 'react'
import Logo from '../components/Header/Logo';
import Search from '../components/Header/Search';
import Icons from '../components/Header/Icons';
import Share from '../components/Share/Share';
import 'react-toastify/dist/ReactToastify.css';

const Header: React.FC = () => {
  return (
    <div className=' flex justify-between items-center border-b py-4 border-gray-600  '>
        <div>
            <Logo />
        </div>

        <div className='hidden md:block'>
            <Search />
        </div>

        <div>
            <Icons />
            <Share />
        </div>
    </div>
  )
}

export default Header