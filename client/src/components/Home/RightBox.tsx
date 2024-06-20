import React from 'react'
import ridvan from "../../assets/ridvan.jpeg";
import {Avatar, Button} from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


const RightBox: React.FC = () => {
  return (
    <div className=' flex flex-col gap-y-10 justify-center items-start w-full fixed '>
      <div className=' flex justify-start items-center gap-5'>
        <div>
          <a href="/">
            <Avatar src={ridvan} sx={{width: 56, height: 56}}/>
          </a>
        </div>

        <div>
          <span className=' font-bold text-lg'>korurerridvan</span>
          <p className=' font-light text-gray-300'>Rıdvan Korurer</p>
        </div>
      </div>

       {/* friends */}
      <div className=' flex flex-col gap-3 px-2'>
        <div>
          <p className=' font-bold text-gray-400 tracking-wider'>My Friends</p>
        </div>
        <ul className=' '>
          <li className='flex justify-start items-center gap-5 py-2'>
            <div>
              <a href="/">
                <Avatar src=''  sx={{width: 34, height: 34}}/>
              </a>
            </div>

            <div>
              <span className=' font-bold text-lg'>bedirhan</span>
              <p className=' font-light text-gray-300'>bedirhan Basbayan</p>
            </div>

            <div className=' ml-20'>
              <Button size='small' variant='contained' endIcon={<ArrowCircleRightIcon />}>Profile Git</Button>
            </div>
          </li>

          <li className='flex justify-start items-center gap-5 py-2'>
            <div>
              <a href="/">
                <Avatar src=''  sx={{width: 34, height: 34}}/>
              </a>
            </div>

            <div>
              <span className=' font-bold text-lg'>bedirhan</span>
              <p className=' font-light text-gray-300'>bedirhan Basbayan</p>
            </div>

            <div className=' ml-20'>
              <Button size='small' variant='contained' endIcon={<ArrowCircleRightIcon />}>Profile Git</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RightBox