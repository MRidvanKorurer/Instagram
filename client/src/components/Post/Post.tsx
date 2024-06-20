import { Avatar } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ridvan from "../../assets/ridvan.jpeg";


const Post: React.FC = () => {
  return (
    <div className=' border border-gray-600 flex flex-col gap-y-4'>
        <div className=' flex justify-between items-center p-4'>
            <div>
                <div className=' flex justify-start items-center gap-x-3'>
                    <Avatar src={ridvan} sx={{fontSize: 100}}/>
                    <p className=' font-semibold'>korurerridvan</p>
                </div>
            </div>

            <div className=' cursor-pointer'>
                <MoreHorizIcon fontSize='large'/>
            </div>
        </div>

        <div className=' w-full h-[500px]'>
            <img className=' w-full h-full object-center' src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
        </div>

        <div className=' p-4 flex flex-col gap-y-3'>
            <div className=' flex flex-col justify-center items-start gap-y-1 cursor-pointer'>
                <FavoriteIcon />
                <span>0 like</span>
            </div>

            <div className=' flex gap-x-3'>
                <span className=' font-bold'>korurerridvan</span>
                <p className=' font-light'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>

            <div>
                <span className=' font-light text-gray-400'>1 saat önce</span>
            </div>
        </div>
    </div>
  )
}

export default Post