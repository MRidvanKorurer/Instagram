import { Avatar } from '@mui/material'
import React from 'react'
import ridvan from "../../assets/ridvan.jpeg";


const Right: React.FC = () => {
  return (
    <div className=' flex flex-col gap-y-5 select-none cursor-pointer'>
        <div>
            <h3 className=' font-bold text-xl tracking-wider'>Online Users</h3>
        </div>

        <div className=' flex justify-start items-center gap-3'>
            <div className='relative'>
                <Avatar src={ridvan} sx={{width: 40, height: 40}}/>
                <div className=' absolute top-0 -right-1 w-3 h-3 bg-green-500 rounded-full'>
                    
                </div>
            </div>
            <span className=' font-bold'>korurerridvan</span>
        </div>
    </div>
  )
}

export default Right