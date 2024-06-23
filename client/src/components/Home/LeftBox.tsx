import React from 'react'
import Post from '../Post/Post'

const LeftBox: React.FC = () => {
  return (
    <div className=' flex flex-col  gap-y-6'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default LeftBox