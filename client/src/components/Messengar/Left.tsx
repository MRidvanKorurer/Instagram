import { Avatar } from '@mui/material'
import React from 'react'
import ridvan from "../../assets/ridvan.jpeg";

const Left: React.FC = () => {
  return (
    <div className=' flex flex-col gap-y-5'>
       <div className=' w-full'>
            <input type="text" placeholder='Search for Friends...' className=' w-full p-2 rounded outline-none text-black '/>
       </div>

       <div className=' flex justify-start items-center gap-3 select-none cursor-pointer hover:bg-gray-600 py-2 transition-all rounded'>
            <Avatar src={ridvan} sx={{width: 40, height: 40}}/>
            <span className=' font-bold tracking-wide'>korurerridvan</span>
       </div>
       
    </div>
  )
}

export default Left