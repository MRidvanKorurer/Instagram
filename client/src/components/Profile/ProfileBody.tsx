import React, { useState } from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface IState {
  post: boolean,
  video: boolean,
  save: boolean,
  tagged: boolean,
}


const ProfileBody: React.FC = () => {

  const [active, setActive] = useState<IState>({
    post: true,
    video: false,
    save: false,
    tagged: false
  });


  const handleClick = (name: string) => {
      if(name === "post") {
        setActive({
          post: true,
          video: false,
          save: false,
          tagged: false
        })
      }else if(name === "video") {
        setActive({
          post: false,
          video: true,
          save: false,
          tagged: false
        })
      }else if(name === "save") {
        setActive({
          post: false,
          video: false,
          save: true,
          tagged: false
        })
      }else if(name === "tagged") {
        setActive({
          post: false,
          video: false,
          save: false,
          tagged: true
        })
      }
  }
  

  
  return (
    <div className=' my-4'>
      <div className=' flex justify-center items-center gap-10 '>
        <button onClick={()=>handleClick("post")} className={`flex justify-center items-center gap-2 ${active.post ? "border-t" : null} py-2`}>
          <AppsIcon />
          <span>POSTS</span>
        </button>
        <button onClick={()=>handleClick("video")} className={`flex justify-center items-center gap-2 ${active.video ? "border-t" : null} py-2`}>
          <VideoLibraryIcon />
          <span>VİDEOS</span>
        </button>
        <button onClick={()=>handleClick("save")} className={`flex justify-center items-center gap-2 ${active.save ? "border-t" : null} py-2`}>
          <BookmarkAddedIcon />
          <span>SAVE</span>
        </button>
        <button onClick={()=>handleClick("tagged")} className={`flex justify-center items-center gap-2 ${active.tagged ? "border-t" : null} py-2`}>
          <CollectionsBookmarkIcon />
          <span>TAGGED</span>
        </button>
      </div>

      <div className=' my-4 flex flex-wrap justify-center items-center gap-5 '>
        <div className='w-[320px] h-[300px] relative hover:text-red-600 group cursor-pointer'>
          <img className=' w-full h-full' src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="postImage" />
          <div className=' absolute top-[150px] right-[150px] opacity-0 group-hover:opacity-100 duration-200 font-bold '>
            <FavoriteIcon sx={{width: 30, height: 30}}/>
            <span className=' text-white'>1</span>
          </div>
        </div>

        <div className='w-[320px] h-[300px] relative hover:text-red-600 group cursor-pointer'>
          <img className=' w-full h-full' src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="postImage" />
          <div className=' absolute top-[150px] right-[150px] opacity-0 group-hover:opacity-100 duration-200 font-bold '>
            <FavoriteIcon sx={{width: 30, height: 30}}/>
            <span className=' text-white'>1</span>
          </div>
        </div>

        <div className='w-[320px] h-[300px] relative hover:text-red-600 group cursor-pointer'>
          <img className=' w-full h-full' src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D" alt="postImage" />
          <div className=' absolute top-[150px] right-[150px] opacity-0 group-hover:opacity-100 duration-200 font-bold '>
            <FavoriteIcon sx={{width: 30, height: 30}}/>
            <span className=' text-white'>1</span>
          </div>
        </div>

        <div className='w-[320px] h-[300px] relative hover:text-red-600 group cursor-pointer'>
          <img className=' w-full h-full' src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcnN8ZW58MHx8MHx8fDA%3D" alt="postImage" />
          <div className=' absolute top-[150px] right-[150px] opacity-0 group-hover:opacity-100 duration-200 font-bold '>
            <FavoriteIcon sx={{width: 30, height: 30}}/>
            <span className=' text-white'>1</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProfileBody;