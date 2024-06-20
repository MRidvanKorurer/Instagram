import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import ridvan from "../../assets/ridvan.jpeg";

const Icons: React.FC = () => {
  return (
    <div className=' flex gap-x-5 justify-center items-center cursor-pointer'>
        <HomeIcon sx={{fontSize: 32}}/>
        <ChatIcon sx={{fontSize: 30}}/>
        <AddIcon sx={{fontSize: 32}}/>

        <Avatar
            alt="Remy Sharp"
            src={ridvan}
            sx={{ width: 46, height: 46 }}
        />
    </div>
  )
}

export default Icons