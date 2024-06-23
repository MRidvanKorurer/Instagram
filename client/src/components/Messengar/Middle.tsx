import { Button } from '@mui/material'
import React from 'react'

const Middle: React.FC = () => {
  return (
    <div className=' flex flex-col h-full justify-between overflow-y-scroll'>
        <div>
            MESSAGE
        </div>

        <div className=' w-full flex flex-col justify-center items-center gap-3 '>
            <textarea name="" id="" placeholder='Write something...' className=' w-10/12 p-3 rounded h-32 text-black'></textarea>
            <Button variant='contained' size='large' className='w-1/3'>Send</Button>
        </div>
    </div>
  )
}

export default Middle